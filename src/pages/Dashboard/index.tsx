import React, { useState, FormEvent } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import api from '../../services/api'

import * as S from './styles'

import logo from '../../assets/logo.svg'

interface RepositoryProps {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard = () => {
  const [repositories, setRepositories] = useState<RepositoryProps[]>([])
  const [newRepo, setNewRepo] = useState('')

  async function handleAddRepository (event:FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()
    const response = await api.get<RepositoryProps>(`repos/${newRepo}`)

    const repository = response.data

    setRepositories([...repositories, repository])
    setNewRepo('')
  }

  return (
    <>
      <img src={logo} alt="" srcSet=""/>
      <S.Title>Explorer on GitHub</S.Title>
      <S.Form onSubmit={handleAddRepository}>

        <input
          placeholder="Insert the repository name"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />

        <button>Search</button>
      </S.Form>

      <S.Repositories>
        {repositories.map(repository => (
          <a key={repository.full_name} href="#">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </S.Repositories>

    </>
  )
}

export default Dashboard

import React, { useState, useEffect, FormEvent } from 'react'
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
  const [inputError, setInputError] = useState('')
  const [newRepo, setNewRepo] = useState('')

  const [repositories, setRepositories] = useState<RepositoryProps[]>(() => {
    const storagedRepositories = localStorage.getItem('@githubExplorer:repositories')

    if (storagedRepositories) return JSON.parse(storagedRepositories)

    return []
  })

  useEffect(() => {
    localStorage.setItem('@githubExplorer:repositories', JSON.stringify(repositories))
  }, [repositories])

  async function handleAddRepository (event:FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()
    try {
      if (!newRepo) {
        setInputError('Please, enter an author/repository name')
        return
      }

      const response = await api.get<RepositoryProps>(`repos/${newRepo}`)
      const repository = response.data

      setRepositories([...repositories, repository])
      setNewRepo('')
      setInputError('')
    } catch (error) {
      setInputError('This search returned an error')
    }
  }

  return (
    <>
      <img src={logo} alt="" srcSet=""/>
      <S.Title>Explorer on GitHub</S.Title>

      <S.Form hasError={!!inputError} onSubmit={handleAddRepository}>

        <input
          placeholder="Insert the repository name"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />

        <button>Search</button>
      </S.Form>

      { inputError && <S.Error>{inputError}</S.Error> }

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

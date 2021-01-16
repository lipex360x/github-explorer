import React, { useEffect, useState } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi'

import api from '../../services/api'

import * as S from './styles'

import logo from '../../assets/logo.svg'

interface ParamsProps {
  repository: string;
}

interface RepositoryProps {
  full_name: string;
  description: string;
  stargazers_count: number,
  forks_count: number,
  open_issues_count: number,
  owner: {
    login: string;
    avatar_url: string;
  }
}
interface IssueProps {
  title: string,
  id: number,
  html_url: string,
  user: {
    login: string
  }
}

const Repository = () => {
  const { params } = useRouteMatch<ParamsProps>()

  const [repository, setRepository] = useState<RepositoryProps | null>(null)
  const [issues, setIssues] = useState<IssueProps[]>([])

  useEffect(() => {
    async function loadData (): Promise<void> {
      const [repository, issues] = await Promise.all([
        api.get(`repos/${params.repository}`),
        api.get(`repos/${params.repository}/issues`)
      ])

      setRepository(repository.data)
      setIssues(issues.data)
    }
    loadData()
  }, [params.repository])

  return (
    <>
      <S.Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/" >
          <FiChevronsLeft size={16} />
          Voltar
        </Link>
      </S.Header>

      { repository && (
        <S.RepositoryInfo>
          <header>
            <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>

          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>

            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>

            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Opening Issues</span>
            </li>
          </ul>
        </S.RepositoryInfo>
      )}

      <S.Issues>
        { issues.map(issue => (
          <a key={issue.id} href={issue.html_url} target="_blank" rel="noreferrer">
          <div>
            <strong>{issue.title}</strong>
            <p>{issue.user.login}</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        ))}

      </S.Issues>
    </>
  )
}

export default Repository

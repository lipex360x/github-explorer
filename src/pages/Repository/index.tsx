import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi'

import api from '../../services/api'

import * as S from './styles'

import logo from '../../assets/logo.svg'

interface RepositoryProps {
  repository: string;
}

const Repository = () => {
  const { params } = useRouteMatch<RepositoryProps>()

  return (
    <>
      <S.Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/dashboard" >
          <FiChevronsLeft size={16} />
          Voltar
        </Link>
      </S.Header>

      <S.RepositoryInfo>
        <header>
          <img src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png" alt="info"/>
          <div>
            <strong>repo/repo</strong>
            <p>Description repository</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>1818</strong>
            <span>Stars</span>
          </li>

          <li>
            <strong>1818</strong>
            <span>Forks</span>
          </li>

          <li>
            <strong>1818</strong>
            <span>Opening Issues</span>
          </li>
        </ul>
      </S.RepositoryInfo>

      <S.Issues>
        <Link to="ser">
          <div>
            <strong>asdrew</strong>
            <p>asdrew</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </S.Issues>
    </>
  )
}

export default Repository

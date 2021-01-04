import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import * as S from './styles'

import logo from '../../assets/logo.svg'

const Dashboard = () => {
  return (
    <>
      <img src={logo} alt="" srcSet=""/>
      <S.Title>Explorer on GitHub</S.Title>
      <S.Form>
        <input placeholder="Insert the repository name" />
        <button>Search</button>
      </S.Form>

      <S.Repositories>
        <a href="#">
          <img
            src="https://avatars1.githubusercontent.com/u/32343054?s=460&u=307a9b437754f3fe41e8dbb3872cd3282f68a387&v=4"
            alt="Felipe"
          />
          <div>
            <strong>Julius</strong>
            <p>Personal Finance Platform</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="#">
          <img
            src="https://avatars1.githubusercontent.com/u/32343054?s=460&u=307a9b437754f3fe41e8dbb3872cd3282f68a387&v=4"
            alt="Felipe"
          />
          <div>
            <strong>Julius</strong>
            <p>Personal Finance Platform</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="#">
          <img
            src="https://avatars1.githubusercontent.com/u/32343054?s=460&u=307a9b437754f3fe41e8dbb3872cd3282f68a387&v=4"
            alt="Felipe"
          />
          <div>
            <strong>Julius</strong>
            <p>Personal Finance Platform</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </S.Repositories>

    </>
  )
}

export default Dashboard

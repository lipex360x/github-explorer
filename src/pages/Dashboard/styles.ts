import styled from 'styled-components'
import { shade } from 'polished'

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin-top: 80px;
`

export const Form = styled.form`
  margin-top:40px;
  max-width: 700px;

  display:flex;
  
  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: none;
    border-radius: 5px 0 0 5px;
    color: #333;

    &::placeholder {
      color: #a8a8b3;
    }

  }

  button {
    width: 210px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: none;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
      cursor: pointer;
    }
  }
`

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 24px;

    background-color: #fff;
    border-radius: 5px;
    text-decoration: none;
    transition: transform 0.2s;
    
    & + a {
      margin-top: 20px;
    }

    &:hover {
      transform: translateX(10px)
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }

  }
`

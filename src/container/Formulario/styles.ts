import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid black;
  width: 300px;
  height: auto;
  margin-top: 20px;
  border-radius: 2rem;
  padding: 0 1rem 1rem 1rem;

  img {
    width: 30px;
    height: 30px;
    margin-left: 10px;
    margin-right: 10px;
  }
`

export const DisplayFlex = styled.div`
  display: flex;
`
export const Form = styled.form`
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666666;

  textarea {
    resize: none;
    margin: 16px 0;
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  label {
    cursor: pointer;
    margin-right: 6px;
  }
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`

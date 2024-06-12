import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: row; 
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
  padding-top: 60px;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  background-color: #0D63AC;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000; 
`

export const Logo = styled.img`
  height: 40px;
  margin-right: 10px;
`

export const Title = styled.h1`
  font-size: 1.5em;
`

export const LoginBox = styled.div`
  background: white;
  padding: 20px;
  border-radius: 50px;
  box-shadow: 0 0 150px rgba(0, 0, 0, 0.1);
  width: 400px; 
  height: auto; /* Alterado para 'auto' para se ajustar ao conteúdo interno */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; 
  top: -50px;
  left: -50px; 
`

export const BoxHeader = styled.div`
  width: 400px;
  padding: 20px;
  background-color: #003C70;
  color: white;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  position: absolute;
  top: 0px; 
  left: 0;
`


export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px; /* Adicionado para criar um espaço interno na box */
`

export const Label = styled.label`
  position: relative;
  align-self: flex-start;
  left: -40px;
  top: 20px;
  margin-bottom: 5px;
  color: #000;
  font-weight: bold;
`

export const Input = styled.input`
  position: relative;
  background-color: #0D63AC;
  width: 150%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 50px;
  color: white;
  box-sizing: border-box; 
  top: 20px;
`


export const Message = styled.p`
  color: #71A9DB;
  font-size: 0.9em;
  margin-top: -5px;
  margin-bottom: 10px;
  text-align: left;
  position: relative;
  left: -40px;
`

export const Button = styled.button`
  position: relative;
  margin: 20px 0; 
  width: 70%;
  padding: 10px;
  background-color: #003C70;
  color: white;
  border: none;
  border-radius: 50px;
  top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #003C70;
  }
`

export const Text = styled.p`
  color: #000;
  font-size: 0.9em;
  text-align: center;
  position: relative;
  top: -15px;
`

export const Link = styled.a`
  color: #003C70;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const Footer = styled.footer`
  width: 100%;
  padding: 10px;
  background-color: #0D63AC;
  color: white;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
`

export const Image = styled.img`
  width: 300px;
  height: auto;
  margin-bottom: 20px;
`

export const SideText = styled.p`
  width: 300px;
  color: #000;
  text-align: center;
  font-size: 1em;
`

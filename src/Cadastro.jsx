import React, { useState } from 'react';
import { Container, Header, Logo, Title, LoginBox, BoxHeader, Form, Input, Button, Footer, GlobalStyle, Label, Message, Text, Link, ImageContainer, Image, SideText } from './styled/login';
import logo from '../public/logo.png'; 
import foto from '../public/foto.png'; 

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [cadastroError, setCadastroError] = useState('');

  const handleCadastro = (e) => {
    e.preventDefault();
    // Lógica de validação do cadastro aqui
    if (senha !== confirmarSenha) {
      setCadastroError('As senhas não coincidem. Por favor, tente novamente.');
    } else {
      // Lógica de cadastro bem-sucedido aqui
      console.log('Nome:', nome);
      console.log('E-mail:', email);
      console.log('CPF:', cpf);
      console.log('Senha:', senha);
      console.log('Confirmação de Senha:', confirmarSenha);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Header>
        <Logo src={logo} alt="ClearTrack Logo" />
        <Title>Cadastre-se na ClearTrack</Title>
      </Header>
      <Container>
        <LoginBox>
          <BoxHeader>Cadastre-se na ClearTrack</BoxHeader>
          <Form onSubmit={handleCadastro}>
            <Label htmlFor="nome">Nome:</Label>
            <Input
              type="text"
              id="nome"
              name="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <Label htmlFor="email">E-mail:</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Label htmlFor="cpf">CPF:</Label>
            <Input
              type="text"
              id="cpf"
              name="cpf"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />
            <Label htmlFor="senha">Senha:</Label>
            <Input
              type="password"
              id="senha"
              name="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <Label htmlFor="confirmarSenha">Confirmar Senha:</Label>
            <Input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
            />
            <Button type="submit">CADASTRAR</Button>
            {cadastroError && <Message style={{ color: 'red' }}>{cadastroError}</Message>}
          </Form>
          <Text>Já possui uma conta? <Link href="#">Faça login</Link></Text>
        </LoginBox>
        <ImageContainer>
          <Image src={foto} alt="ClearTrack" />
          <SideText>Com o ClearTrack, você pode registrar e acompanhar a limpeza dos banheiros em tempo real, garantindo uma gestão eficiente e a pontualidade nas tarefas.</SideText>
        </ImageContainer>
        <Footer>
          &copy; {new Date().getFullYear()} ClearTrack. Todos os direitos reservados.
        </Footer>
      </Container>
    </>
  );
};

export default Cadastro;

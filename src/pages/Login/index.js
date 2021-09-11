import React from 'react';
import { Title, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  return (
    <Container>
      <Title>
        Login <small>Hi there</small>
      </Title>

      <Paragraph>Lorem ipsum dolor sit amet.</Paragraph>
      <button type="submit">Send </button>
    </Container>
  );
}

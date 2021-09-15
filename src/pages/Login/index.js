import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Title, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyles';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const clickedButton = useSelector((state) => state.example.clickedButton);
  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clickButtonRequest());
  }
  return (
    <Container>
      <Title>
        Login <small>{clickedButton ? 'Clicked' : 'Not Clicked'}</small>
      </Title>
      <Paragraph>Lorem ipsum dolor sit amet.</Paragraph>
      <button type="button" onClick={handleClick}>
        Send
      </button>
    </Container>
  );
}

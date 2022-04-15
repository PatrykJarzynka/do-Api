import { useState } from 'react';
import Button from './Button';
import Name from './Name';
import Number from './Number';
import styled from '@emotion/styled';

const FancyForm = styled.form({
  border: '1px solid black',
  display: 'flex',
  flexDirection: 'column',
  width: '500px',
  marginLeft: 5,
});

const StyledSpan = styled.span({
  marginLeft: 5,
  fontWeight: 500,
});

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const value = event.target.value;
    if (event.target.name === 'name') setName(value);
    if (event.target.name === 'number') setNumber(value);
  };

  return (
    <FancyForm onSubmit={handleSubmit}>
      <StyledSpan>Name</StyledSpan>
      <Name type="text" name={name} onChange={handleChange} />
      <StyledSpan>Number</StyledSpan>
      <Number type="tel" number={number} onChange={handleChange} />
      <Button type="submit" label={'Add contact'} />
    </FancyForm>
  );
}

export default ContactForm;

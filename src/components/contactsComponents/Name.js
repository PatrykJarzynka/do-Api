import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const FancyInput = styled.input({
  width: '200px',
  marginLeft: 5,
  marginBottom: 20,
  '&:focus': { outlineColor: 'blue' },
});

function Name({ name, onChange }) {
  return (
    <FancyInput
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      value={name}
      onChange={onChange}
    />
  );
}

Name.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default Name;

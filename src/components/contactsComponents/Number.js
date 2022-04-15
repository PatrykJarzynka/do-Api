import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const FancyInput = styled.input({
  width: '200px',
  marginLeft: 5,
  marginBottom: 20,
  '&:focus': { outlineColor: 'blue' },
});

function Number({ number, onChange }) {
  return (
    <FancyInput
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      value={number}
      onChange={onChange}
    />
  );
}

FancyInput.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default Number;

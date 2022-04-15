import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const FancyButton = styled.button(props => ({
  width: 100,
  marginLeft: 5,
  marginBottom: 10,
  borderColor: 'rgb(199, 193, 193)',
  borderRadius: 5,
  backgroundColor: props.onClick ? 'initial' : 'rgb(100, 115, 222)',
  fontWeight: 700,
  '&:hover': { cursor: 'pointer' },
  '&:focus': props.onClick && { backgroundColor: 'blue' },
}));

function Button({ label, type, onClick }) {
  return (
    <FancyButton type={type} onClick={onClick}>
      {label}
    </FancyButton>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

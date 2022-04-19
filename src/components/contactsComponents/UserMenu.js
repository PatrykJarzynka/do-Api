import styled from "@emotion/styled";
import Button from "@mui/material/Button";

const FancyDiv = styled.div({
  marginLeft: 10,
  marginTop: 10,
});

function UserMenu({ onClick }) {
  return (
    <FancyDiv>
      <Button variant="contained" size="small" type="button" onClick={onClick}>
        Logout
      </Button>
    </FancyDiv>
  );
}

export default UserMenu;

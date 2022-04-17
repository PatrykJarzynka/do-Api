import { nanoid } from "nanoid";
import Button from "./Button";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectFilter } from "../../features/contactsSlice";

const FancyList = styled.ul({
  fontWeight: 500,
});

function ContactList({ onClick }) {
  const filteredList = useSelector(selectFilter);
  let contacts = filteredList.map((contact) => (
    <li key={nanoid()}>
      {contact.name}:{contact.number}
      <Button
        type="button"
        label="Delete"
        onClick={() => onClick(contact.id)}
      />
    </li>
  ));

  return <FancyList>{contacts}</FancyList>;
}

ContactList.propTypes = {
  list: PropTypes.array,
  filter: PropTypes.string,
  onClick: PropTypes.func,
};

export default ContactList;

import ContactForm from "../../components/contactsComponents/ContactForm";
import ContactList from "../../components/contactsComponents/ContactList";
import Filter from "../../components/contactsComponents/Filter";
import { nanoid } from "nanoid";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsync,
  selectContacts,
  postAsync,
  deleteAsync,
  filterContacts,
} from "../../features/contactsSlice";
import { useEffect } from "react";
import { selectToken } from "../../store/slices/auth";
import { useNavigate } from "react-router-dom"
import UserMenu from "../../components/contactsComponents/UserMenu";
import { signOut } from "../../store/slices/authThunk";

const StyledHeader = styled.h1({
  marginLeft: 5,
});

function Contacts() {

  const token = useSelector(selectToken);

  const navigate = useNavigate();

  useEffect(() => {
    let abortController = new AbortController();
    dispatch(fetchAsync());
    return () => {
      abortController.abort();
    };
  }, []);

  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }
  },[token])


  const logout = () => {
    dispatch(signOut(token));
  }

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const deleteContact = (id) => {
    dispatch(deleteAsync(id));
  };

  const addContact = (name, number) => {
    const contact = { name: name, number: number, id: nanoid() };
    const foundContant = contacts.find((contact) => contact.name === name);
    if (foundContant) {
      alert(name + " is already in contacts");
      return;
    }
    dispatch(postAsync(contact));
  };

  const handleFilter = (event) => {
    const value = event.target.value;
    dispatch(filterContacts(value));
  };

  return (
    <div>
      <UserMenu onClick={logout}></UserMenu>
      <StyledHeader>Phonebook</StyledHeader>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter onChange={handleFilter} filter={handleFilter} />
      <ContactList onClick={deleteContact} />
    </div>
  );
}

export default Contacts;

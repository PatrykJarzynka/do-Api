import api from "../services/api";

export function fetchContacts() {
  return api.get("/contacts");
}

export function postContacts(contact) {
  return api.post("/contacts", contact);
}

export function deleteContact(id) {
  return api.delete(`/contacts/${id}`);
}

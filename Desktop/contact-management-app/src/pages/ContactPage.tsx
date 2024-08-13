import React from "react";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";

const ContactPage: React.FC = () => {
  return (
    <div>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default ContactPage;

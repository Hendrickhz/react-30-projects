import React from "react";
import Contact from "./Contact";
import contacts from "./db.json";
const ContactList = ({ search,sortAZ }) => {
  const generateAvatars = () => {
    const types = [
      "adventurer",
      "avataaars",
      "bottts",
      "micah",
      "miniavs",
      "notionists",
      "personas",
      "initials",
      "big-ears",
      "big-smile",
    ];

    return types[Math.floor(Math.random() * types.length)];
  };
  if(sortAZ){
    contacts.sort((a,b)=>
    a.first_name.localeCompare(b.first_name))
  }else{
    contacts.sort((a,b)=>
    b.first_name.localeCompare(a.first_name))
  }

  return (
    <div className="py-3">
      {contacts
        .filter((contact) => {
          if (!search.trim()) {
            return contact;
          } else if (
            contact.first_name
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase())
          ) {
            return contact;
          }
        })
        .map((contact) => (
          <Contact
            key={contact.id}
            icon={`https://api.dicebear.com/6.x/${generateAvatars()}/svg
 `}
            firstName={contact.first_name}
            lastName={contact.last_name}
            phone={contact.phone}
          />
        ))}
    </div>
  );
};

export default ContactList;

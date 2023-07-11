import React, { useEffect, useRef, useState } from "react";
import Title from "../../components/Title";
import ContactCard from "./ContactCard";
import data from "./data.json";

const ContactFilterApp = () => {
  const [contactSearch, setContactSearch] = useState("");
  const handleInput = (e) => {
    setContactSearch(e.target.value);
  };
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className=" mt-[5vh] text-center container mx-auto">
      <Title text={"Contact Filter App"} />
      <input
        ref={inputRef}
        type="text"
        name=""
        className=" my-8 border px-3 py-2 rounded-sm shadow-sm"
        placeholder="search by name"
        id=""
        onChange={handleInput}
      />
      <section className="w-full flex flex-wrap gap-3 mx-auto ">
        {data
          .filter((contact) => {
            if (contactSearch == "") {
              return contact;
            } else if (
              contact.name
                .toLocaleLowerCase()
                .includes(contactSearch.toLocaleLowerCase())
            ) {
              return contact;
            }
          })
          .map((contact) => (
            <ContactCard
              key={contact.id}
              name={contact.name}
              email={contact.email}
              phone={contact.phone}
              bgColor="darkgreen"
            />
          ))}
      </section>
    </div>
  );
};

export default ContactFilterApp;

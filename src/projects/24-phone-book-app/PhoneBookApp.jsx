import React, { useState } from "react";
import Title from "../../components/Title";
import ContactList from "./ContactList";
import SearchFilter from "./SearchFilter";
const PhoneBookApp = () => {
  const [search, setSearch] = useState("");
  const [showContacts, setShowContacts] = useState(false);
  const [sortAZ, setSortAZ] = useState(true);
  const toggleShowContacts = () => {
    setShowContacts(!showContacts);
  };
  const toggleSortAZ = () => {
    setSortAZ(!sortAZ);
  };
  return (
    <div className="  mt-[5vh]">
      <Title text={"Phone Book "} />
      <main className="bg-gray-700 text-white py-4 mt-4">
        <SearchFilter
          toggleShowContacts={toggleShowContacts}
          toggleSortAZ={toggleSortAZ}
          search={search}
          setSearch={setSearch}
        />
        <div className="h-[650px] overflow-auto">
          <Title
            text={"Display Contacts"}
            classes={"text-white text-lg text-center"}
          />
          {showContacts && <ContactList sortAZ={sortAZ} search={search} />}
        </div>
      </main>
    </div>
  );
};

export default PhoneBookApp;

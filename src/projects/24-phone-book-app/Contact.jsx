import React from "react";
import styled from "styled-components";
import { FaUserAlt, FaPhone } from "react-icons/fa";
const ContactStyle = styled.li`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  align-items: center;
  max-width: 700px;
  margin:4px auto;
  padding: 0.2rem 0.4rem;
  border-radius: 1px solid #666;
  &:hover{
    cursor: pointer;
    background-color: #666;
  }
  img{
    height: 50px;
    border-radius: 50%;
  }
`;

const Contact = ({ icon, firstName, lastName, phone }) => {
  return (
    <ContactStyle>
      <div className="">{!icon ? <FaUserAlt /> : <img src={icon} />}</div>
      <div className="">{firstName ?? "John"}</div>
      <div className="">{lastName ?? "Doe"}</div>
      <div className="">
        {!phone ? "000-000-000" : <a className="text-blue-300 flex items-center" href={`tel:${phone}`}>{phone} <FaPhone className=" ml-2 "/> </a>}
      </div>
    </ContactStyle>
  );
};

export default Contact;

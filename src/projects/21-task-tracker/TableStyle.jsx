import styled from "styled-components";

export const TableStyle = styled.div`
  width: 700px;
  margin: auto;
  font-weight: 600;
  ul.table-head {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: #333;
    color: #fff;
    border-radius: 4px;
    padding: 15px 30px;
    margin-top: 25px;
    margin-bottom: 25px;
  }
  ul.table-row {
    display: block;
    margin-bottom: 25px;
    width: 100%;
    & li {
      background-color: #fff;
      box-shadow: 0px 0px 5px 1px rgba(145, 145, 145, 0.1);
      border-radius: 4px;
      padding: 15px 30px;
      margin-top: 25px;
      margin-bottom: 25px;
      width: 100%;
      transition: all 0.2s ease;
      &:hover {
        box-shadow: none;
        cursor: pointer;
      }
      &:nth-child(odd) {
        background-color: rgba(148, 148, 148, 0.3);
      }
      &:nth-child(even) {
        background-color: rgba(201, 201, 201, 0.267);
      }
      &.completed {
        color: #ffffff;
        background-color: rgb(45, 199, 40);
        box-shadow: none;
      }
    }
  }
  input {
    border: none;
    padding: 0.35rem 0.75rem;
    font-weight: bold;
    font-size: 0%.8;
  }
  input:hover {
    background: rgba(104, 104, 104, 0.2);
  }
`;
export const NewTaskStyle = styled.li`
  display: flex;
  justify-content: space-between;
`;

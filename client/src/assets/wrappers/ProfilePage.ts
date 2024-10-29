import styled from "styled-components";

const Wrapper = styled.section`
  width: 70%;
  margin: 0 auto;
  padding: 100px 20px;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .form-row {
    height: 70px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px;
    /* border: 2px solid gray; */
    padding: 5px 10px;
    width: 90%;
  }

  input {
    width: 50%;
    height: 60%;
    padding: 0 10px;
    border-radius: 10px;
    border: none;
    background-color: none;
  }

  .label {
    margin-right: 0px;
    font-size: 16px;
    text-transform: capitalize;
  }

  .form-center {
    background-color: #202020;
    border-radius: 15px;
    padding: 40px 80px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    column-gap: 1rem;
  }

  button {
    background-color: #0f93fe;
    width: 50%;
    height: 40px;
    border: none;
    border-radius: 8px;
    justify-self: center;
    font-size: 18px;
  }

  .logout-button {
    display: flex;
    width: 8%;
    justify-content: center;
    background-color: #ff4d4d;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    cursor: pointer;
    position: absolute;
    right: 100px;
    top: 100px;
  }

  @media (max-width: 576px) {
    padding: 50px 10px;
    height: 130vh;
    .logout-button {
      width: 22%;
      right: 20px;
      border-radius: 5px;
    }
    .form-center {
      padding: 20px 10px;
      grid-template-columns: 1fr; // Single column for smaller screens
    }

    button {
      width: 80%; // Adjust button width for smaller screens
    }
  }
`;

export default Wrapper;

import styled from "styled-components";

const Wrapper = styled.section`
  .location-field {
    select {
      padding: 5px 4px;
      border-radius: 4px;
      width: 52%;
    }
  }
  .login-container {
    z-index: -1;
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #131212;
  }

  .login-form {
    width: 22%;
    background-color: #1a1a1a;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;
  }

  .login-form input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
  }

  .login-form button {
    width: 30%;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #8d7d6a;
    color: #fff;
    cursor: pointer;
  }

  .login-form button:hover {
    background-color: #0056b3;
  }
  .aa {
    color: #8d7d6a;
  }

  @media (max-width: 576px) {
    .login-form {
      width: 85%;
    }
    .login-form button {
      width: 40%;
    }
  }
`;

export default Wrapper;

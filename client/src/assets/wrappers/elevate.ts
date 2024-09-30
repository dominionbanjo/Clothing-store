import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  background-color: #c2b4a3;
  padding: 40px 30px;
  border-radius: 20px;
  margin: 0px auto 150px;
  .elevate-top {
    width: 100%;
    padding-left: 40px;
    text-align: left;
    margin-bottom: 60px;
    position: relative;
    z-index: 1;
  }
  .elevate-top-texts {
    width: 85%;
    color: black;
    position: relative;
    button {
      position: absolute;
      right: -120px;
      top: 70px;
      border: none;
      padding: 0 13px;
    }
  }

  .elevate-top img {
    /* opacity: 0.6; */
    position: absolute;
    top: -40px;
    right: -30px;
    width: 455px;
    height: auto;
    border-top-right-radius: 10px;
    z-index: -1;
  }
  .elevate-top h2 {
    font-size: 50px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  .elevate-top p {
    width: 90%;
    font-size: 15px;
    letter-spacing: 1.5px;
  }
  @media (max-width: 576px) {
    width: 95%;
    padding: 10px 10px;
    margin: 0px auto 40px;
    .elevate-top {
      padding-left: 20px;
      margin-bottom: 40px;
    }
    .elevate-top-texts {
      width: 95%;
      button {
        position: relative;
        width: 100%;
        right: 0px;
        top: 25px;
        font-size: 19px;
      }
    }

    .elevate-top img {
      position: absolute;
      top: -8px;
      right: -8px;
      width: 220px;
      height: auto;
      border-top-right-radius: 10px;
      z-index: -1;
    }
    .elevate-top h2 {
      font-size: 30px;
      margin-bottom: 15px;
    }
    .elevate-top p {
      width: 95%;
      font-size: 14px;
      letter-spacing: 1.5px;
    }
  }
`;

export default Wrapper;

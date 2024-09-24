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
`;

export default Wrapper;

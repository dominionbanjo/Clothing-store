import styled from "styled-components";

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100vw;
  .animated-section {
    overflow: hidden;
    white-space: nowrap;
    position: relative;
    width: 100%;
    display: flex;
    height: 90px;
    border: 1px dashed rgba(194, 180, 163, 0.2);
    margin-bottom: 40px;
  }
  .scrolling-section {
    display: flex;
    /* flex-wrap: nowrap; */
    width: 200%;
    /* animation: scroll 10s linear infinite; */
  }
  .item {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    /* width: 180px; */
    /* border: 1px solid red; */
    padding: 15px 20px;
    /* min-width: 280px; */
  }
  .item h4 {
    opacity: 0.6;
  }
  .item img {
    width: 35px;
    margin-right: 10px;
  }
  .social-section {
    width: 100%;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px;
    padding-left: 120px;
    border-bottom: 1px dashed rgba(194, 180, 163, 0.2);
    margin-bottom: 40px;
  }
  .social-section h1 {
    width: 70%;
    font-size: 74px;
  }
  .socials {
    width: 25%;
    /* background-color: rgba(194, 180, 163, 0.2); */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
  }
  .social-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-radius: 8px;
    background: #d6cdc2;
    margin-right: 5px;
  }
  .links-section {
    width: 95%;
    align-self: center;
    padding: 50px;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .left,
  .right,
  .middle {
    width: 100%;
    h3 {
      margin-bottom: 20px;
    }
    a {
      color: var(--dark-color);
      margin-right: 20px;
      font-size: 14px;
      opacity: 0.6;
    }
  }
  input {
    width: 85%;
    padding: 13px 20px;
    border-radius: 5px;
    background-color: #404040;
    font-size: 16px;
  }
  .right {
    /* background-color: #d6cdc2; */
  }
  form {
    position: relative;
  }
  .submit-arrow {
    position: absolute;
    top: 25%;
    right: 18%;
  }
  .submit-arrow:hover {
    cursor: pointer;
  }
  .t-and-c {
    width: 100%;
    border-top: 1px dashed rgba(194, 180, 163, 0.2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 40px;
    letter-spacing: 1.5px;
    opacity: 0.6;
  }
  .t-left {
    /* width: 30%; */
    /* background-color: #404040; */
  }
  .t-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 100px;
    /* width: 19%; */
  }
  .dash {
    width: 1px;
    height: 20px;
    background-color: #ffff;
    opacity: 0.4;
    margin: 0 10px;
  }

  @keyframes scroll {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;
export default Wrapper;

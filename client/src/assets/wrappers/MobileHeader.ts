import styled from "styled-components";

const Wrapper = styled.header`
  @media (min-width: 992px) {
    display: none;
  }
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 15px;
  .mobile-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* justify-content: center; */
    width: 100%;
  }

  a {
    color: var(--dark-color); /* Different link style */
    text-decoration: none;
    font-size: 30px;
  }
  svg {
    font-size: 30px;
    /* width: 50px; */
    padding: 7px;
    background: #ae9b84;
    border-radius: 5px;
  }
  .right-icons {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .pop-screen {
    position: absolute;
    top: 55px;
    right: 15px;
    /* width: 100vw; */
    /* height: 100vh; */
    /* width: 40%; */
    width: 180px;
    /* height: 100px; */
    z-index: 999;
    background-color: #0f0f0f;

    display: flex;
    flex-direction: column;
    /* align-items: center; */
    padding: 20px 0px 20px 30px;
    border-radius: 10px;
    /* padding-right: 30px; */
    a {
      font-size: 14px;
      margin-bottom: 20px;
    }
    li {
      margin-bottom: 12px;
    }
  }
`;

export default Wrapper;

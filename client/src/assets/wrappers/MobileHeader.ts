import styled from "styled-components";

const Wrapper = styled.header`
  @media (min-width: 992px) {
    display: none;
  }
  height: 20vh;
  display: flex;
  padding: 10px 30px;
  .mobile-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  a {
    color: var(--dark-color); /* Different link style */
    text-decoration: none;
    font-size: 40px;
  }
  svg {
    font-size: 50px;
    /* width: 50px; */
    padding: 7px;
    background: #ae9b84;
    border-radius: 5px;
  }
`;

export default Wrapper;

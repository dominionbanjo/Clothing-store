import styled from "styled-components";

const Wrapper = styled.header`
  display: none;
  @media (min-width: 992px) {
    background-color: var(--dark-theme-background);

    background: var(--dark-theme-background);
    /* margin-top: 10px; */
    padding-top: 10px;
    color: var(--dark-color);
    color: white;
    width: 100vw;
    display: flex;
    .left,
    .right {
      display: flex;
      width: 13%;
      justify-content: space-between;
      align-items: center;
    }
    .cart-btn {
      /* border: none; */
      /* width: 30px; */
    }
    svg {
      /* width: 70px;
    height: 65px; */
      fill: white;
      border: none;
      font-size: 50px;
      padding: 14px;
      background-color: #1e1e1e;
      border-radius: 10px;
      margin-right: 10px;
      /* background: #1e1e1e; */
    }
    .right {
      /* align-items: flex-end; */
    }
    ul {
      display: flex;
      width: 90%;
      align-items: center;
      justify-content: space-between;
      list-style: none;
      margin: 0 auto;
      padding: 18px 0;
    }
    li {
      .header-button {
        color: var(--dark-color); /* Default color */
        font-family: Manrope;
        text-decoration: none;
        width: 60px;
        height: 22px;
        padding: 14px;
        /* background-color: #191919; */
        margin-right: 10px;
        border-radius: 5px;
        transition: color 0.5s ease;

        &.active {
          background-color: #2a2a2a;
        }

        &:hover {
          color: #8d7d6a;
        }
      }

      .header-link {
        color: var(--dark-color); /* Different link style */
        font-size: 22px;
      }
    }
    a {
      text-decoration: none;
    }
    .header-button {
    }
    .brown {
      background-color: #ae9b84;
      &:hover {
        color: #ae9b84;
      }
    }
  }
`;

export default Wrapper;

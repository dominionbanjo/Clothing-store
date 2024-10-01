import styled from "styled-components";

const Wrapper = styled.div`
  .section-top {
    border: 1px dashed rgba(194, 180, 163, 0.2);

    width: 90%;
    padding: 20px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    button {
      padding: 0 15px;
    }
    h2 {
      text-transform: uppercase;
    }
  }
  .gen-sec button {
    cursor: pointer;
  }

  .products-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    width: 90%;
    margin: 0 auto;
    justify-content: center;
    gap: 0;
  }
  @media (max-width: 576px) {
    .section-top {
      width: 95%;
      padding: 20px 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      button {
        font-size: 8px;
        width: 65px;
        padding: 1px 1px;
        height: 35px;
        border-radius: 3px;
        svg {
          font-size: 12px;
        }
      }

      h2 {
        font-size: 20px;
      }
    }

    .products-container {
      grid-template-columns: repeat(1, 1fr);
      width: 95%;
    }
  }
`;

export default Wrapper;

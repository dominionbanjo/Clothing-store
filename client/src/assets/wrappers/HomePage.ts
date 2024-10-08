import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

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
    .products-container {
      grid-template-columns: repeat(1, 1fr);
      width: 95%;
    }
  }
`;

export default Wrapper;

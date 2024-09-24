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
`;

export default Wrapper;

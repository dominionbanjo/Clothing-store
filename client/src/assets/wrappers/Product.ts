import styled from "styled-components";

const Wrapper = styled.div`
  /* border: 2px solid red; */
  border: 1px dashed rgba(194, 180, 163, 0.2);

  /* width: 350px; */
  width: 100%;
  margin: 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  .product-image-container {
    width: 90%;
  }
  .product-image-container img {
    width: 100%;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
  }
  .buttons {
    margin: 20px 0;
    display: flex;
    width: 90%;
    justify-content: space-between;
  }
  .buttons button {
    width: 100px;
    height: 35px;
    font-size: 12px;
    /* font-size: clamp(14px, 2vw, 14px); */
  }
  .category {
    margin: 5px;
    display: flex;
    background-color: #1f1f1f;
    border-radius: 18px;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 40px;
    font-size: 14px;
    text-transform: capitalize;
    opacity: 0.6;
    text-align: center;
  }
  .bottom {
    width: 90%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    letter-spacing: 2px;
    .specs {
      width: 100%;
      display: flex;
      /* justify-content: space-between; */
      margin-top: 10px;
    }
  }
  .options {
    font-size: 14px;
    margin-right: 20px;
    span {
      font-size: 12px;
      opacity: 0.6;
    }
  }
`;

export default Wrapper;

import styled from "styled-components";
const Wrapper = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px auto;

  .main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px dashed rgba(194, 180, 163, 0.2);
    border-radius: 20px;
  }
  .top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 50px;
    border-bottom: 1px dashed rgba(194, 180, 163, 0.2);
    h1 {
      font-size: 40px;
    }
    p {
      font-size: 14px;
      opacity: 0.6;
      margin-top: 15px;
      span {
        margin-left: 20px;
        background-color: #4caf50;
        padding: 5px 15px;
        border-radius: 6px;
      }
    }
  }
  .cart-btn {
    display: flex;
    align-items: center;
    padding: 8px 13px;
    border-radius: 5px;
    border: none;
    img {
      margin-right: 10px;
    }
  }
  .images-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px dashed rgba(194, 180, 163, 0.2);
    img {
      align-self: center;
      max-width: 700px;
      min-width: 400px;
      margin: 30px;
    }
  }
  .products-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }
  .features {
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    align-items: center;
    border: 1px dashed rgba(194, 180, 163, 0.2);
    h3 {
      width: 65%;
      margin-bottom: 20px;
    }
    li {
      font-size: 14px;
      opacity: 0.7;
      margin-bottom: 5px;
    }
  }
  .price-and-sizes-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px dashed rgba(194, 180, 163, 0.2);
  }
  .prices {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 30px;
    width: 100%;
    span {
      opacity: 0.6;
      font-size: 14px;
      margin-left: 15px;
    }
  }
  .sizes {
    border-top: 1px dashed rgba(194, 180, 163, 0.2);
    padding: 20px 30px;
    width: 100%;
    margin-top: 40px;
    h4 {
      margin-bottom: 20px;
    }
  }
  .size-con {
    width: 100%;
    display: flex;
    align-items: center;
    .size {
      background-color: #262626;
      width: 65px;
      height: 35px;
      margin-right: 20px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .add-review {
    width: 100%;
    padding: 20px;
    border: 1px dashed rgba(194, 180, 163, 0.2);
    h3 {
      margin-bottom: 15px;
    }
    form {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .form-row {
        margin-bottom: 25px;
        display: flex;
        justify-content: space-between;
        /* background-color: #262626; */
        input {
          width: 60%;
          height: 35px;
          padding: 0 10px;
        }
      }

      button {
        width: 20%;
        padding: 10px;
        margin-top: 20px;
        border-radius: 5px;
        border: none;
        align-self: center;
        background-color: #8d7d6a;
      }
    }
    .star-div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 60%;
    }
  }
  .ratings-and-reviews {
    width: 100%;
    border: 1px dashed rgba(194, 180, 163, 0.2);
    padding: 20px;
    display: flex;
    flex-direction: column;
    h3 {
      margin-bottom: 15px;
      margin-top: 10px;
      text-align: center;
    }
    .reviews {
      margin-bottom: 20px;
      .total-reviews {
        display: flex;
        flex-direction: column;
        border-bottom: 1px dashed rgba(194, 180, 163, 0.2);
        padding-bottom: 20px;
        /* background-color: #262626; */
        align-items: center;
      }
      .review {
        /* background-color: #262626; */
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 15px;
        border-bottom: 1px dashed rgba(194, 180, 163, 0.2);

        .author {
          font-weight: bold;
        }
        .title {
          font-style: italic;
        }
      }
    }
    .load-more {
      /* background-color: #4caf50; */
      background-color: #8d7d6a;
      width: 20%;
      align-self: center;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        background-color: unset;
      }
    }
  }
`;

export default Wrapper;

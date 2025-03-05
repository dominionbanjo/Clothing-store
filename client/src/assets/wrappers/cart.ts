import styled from "styled-components";

interface WrapperProps {
  $mobile: boolean;
}

const Wrapper = styled.aside<WrapperProps>`
  position: absolute;
  top: ${(props) => (props.$mobile ? "60px" : "95px")};
  right: ${(props) => (props.$mobile ? "15px" : "50px")};
  background-color: black;
  border-radius: 15px;
  z-index: 99;
  /* min-width: 400px; */
  min-width: ${(props) => (props.$mobile ? "300px" : "400px")};
  svg {
    font-size: 30px;
    /* width: 50px; */
    padding: 7px;
    background: #ae9b84;
    border-radius: 5px;
  }
  .cart-container {
    /* background-color: aliceblue; */
    padding: 20px;
    max-width: 600px;
    margin: auto;
    display: flex;
    flex-direction: column;
  }

  .cart-items {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 15px;
  }

  .cart-item {
    display: flex;
    align-items: center;
    gap: 20px;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
  }

  .cart-item-image {
    width: 80px;
    height: auto;
    border-radius: 5px;
  }

  .cart-item-details {
    flex: 1;
  }

  .cart-total {
    text-align: right;
    font-size: 18px;
    margin-top: 20px;
  }
  button {
    width: 40%;
    align-self: center;
    padding: 10px 15px;
    margin-top: 20px;
    font-size: 18px;
    font-weight: 600;
    background: #ae9b84;
    border: none;
    border-radius: 5%;
  }
  .close {
    position: absolute;
    right: 18px;
    cursor: pointer;
  }
  .quantity {
    /* border: 2px solid red; */

    display: flex;
    justify-content: space-between;
    .modify {
      margin-left: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* border: 2px solid red; */
      width: 60%;
    }
  }
  .buttons {
    button {
      margin-right: 20px;
    }
  }
`;

export default Wrapper;

// import styled from "styled-components";

// interface WrapperProps {
//   mobile: boolean;
// }

// const Wrapper = styled.aside<WrapperProps>`
//   position: absolute;
//   top: ${(props) => (props.mobile ? "60px" : "95px")};
//   right: ${(props) => (props.mobile ? "15px" : "50px")};
//   background-color: black;
//   border-radius: 15px;
//   z-index: 99;
//   min-width: ${(props) => (props.mobile ? "300px" : "400px")};

//   @media (max-width: 768px) {
//     top: 50px;
//     right: 10px;
//     min-width: 250px;
//   }

//   @media (max-width: 480px) {
//     top: 40px;
//     right: 5px;
//     min-width: 200px;
//   }

//   svg {
//     font-size: 30px;
//     padding: 7px;
//     background: #ae9b84;
//     border-radius: 5px;
//   }

//   .cart-container {
//     padding: 20px;
//     max-width: 600px;
//     margin: auto;
//     display: flex;
//     flex-direction: column;

//     @media (max-width: 768px) {
//       padding: 15px;
//       max-width: 500px;
//     }

//     @media (max-width: 480px) {
//       padding: 10px;
//       max-width: 400px;
//     }
//   }
// `;

// export default Wrapper;

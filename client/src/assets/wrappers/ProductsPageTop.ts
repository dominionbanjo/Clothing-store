import styled from "styled-components";

interface WrapperProps {
  $homepage: boolean;
}
const Wrapper = styled.div<WrapperProps>`
  /* margin-top: 50px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .journey {
    /* background-color: aliceblue; */
    width: 90%;
    margin-top: 60px;
    border: 1px dashed rgba(194, 180, 163, 0.2);
    /* border-radius: 15px; */
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    padding-top: 50px;
    margin-bottom: 0px;
  }
  .journey-top {
    width: 100%;
    padding-left: 40px;
    text-align: left;
    margin-bottom: 60px;
    position: relative;
    z-index: 1;
  }
  .journey-top-texts {
    width: 76%;
    p {
      opacity: 0.6;
    }
  }

  .journey-top img {
    position: absolute;
    top: -42px;
    right: 0;
    width: ${(props) => (props.$homepage ? "220px" : "260px")};
    height: auto;
    border-top-right-radius: 10px;
    z-index: -1;
  }
  .journey-top h2 {
    font-size: 40px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  .journey-top p {
    font-size: 15px;
    letter-spacing: 1.5px;
  }

  .journey-bottom {
    width: 100%;
    /* background-color: #81807e; */
  }
  .top-options {
    display: flex;
    margin-bottom: 80px;
    margin-left: 50px;
  }
  .active {
    background-color: #c7baaa;
  }
  .button-shape {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 22px;
    padding: 20px 30px;
    /* background-color: #191919; */
    margin-right: 30px;
    border-radius: 5px;
    border: 1px dashed #81807e;
  }
`;

export default Wrapper;

import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  .first-section {
    width: 90%;
    margin-top: 50px;
    border: 1px dashed rgba(194, 180, 163, 0.2);
    border-radius: 15px;
    padding-top: 50px;
    margin-bottom: 0px;
  }
  .first-section-top {
    width: 100%;
    padding: 30px 0;
    padding-left: 40px;
    text-align: left;
    margin-bottom: 60px;
    position: relative;
    z-index: 1;
  }
  .first-section-top-texts {
    width: 85%;
  }

  .first-section-top img {
    position: absolute;
    top: -47px;
    right: 0;
    width: 255px;
    height: auto;
    border-top-right-radius: 10px;
    z-index: -1;
  }
  .first-section-top h2 {
    font-size: 40px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  .first-section-top p {
    font-size: 15px;
    letter-spacing: 1.5px;
    opacity: 0.6;
  }

  .first-section-bottom {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .first-section-grid-item {
    border: 1px dashed rgba(194, 180, 163, 0.2);
    height: 300px;
    width: 100%;
    padding: 20px;
    overflow: hidden;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .first-section-grid-item h4 {
    opacity: 0.6;
  }

  .first-mid {
    border: 1px dashed rgba(194, 180, 163, 0.2);
    padding: 30px 40px;
    width: 100%;
    margin: 2Opx 0px;
  }

  .first-section-grid-item {
    display: flex;
    align-items: center;
    border: 1px dashed rgba(194, 180, 163, 0.2);
    width: 100%;
    position: relative;
    height: 350px;
  }

  .first-section-grid-item img {
    /* width: 100%; */
    width: 20%;
    display: block;
    margin-bottom: 25px;
  }

  .first-section-grid-item img:nth-of-type(2) {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 140px;
    /* height: auto; */
  }

  .first-section-grid-item h3 {
    margin: 20px 0 25px;
  }

  .first-section-grid-item p {
    margin: 0;
    font-size: 13px;
    background-color: #2a2a2a;
    border: 2px dashed rgba(194, 180, 163, 0.2);
    padding: 16px 40px;
    border-radius: 20px;
    width: 280px;
    text-align: center;
    &:hover {
      cursor: pointer;
    }
  }
  .second-section {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-top: 120px;
    border: 1px dashed rgba(194, 180, 163, 0.2);
    border-radius: 20px;
    button {
      padding: 0 15px;
    }
  }
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px dashed rgba(194, 180, 163, 0.2);
    padding: 30px 40px;
  }
  .bottom-item {
    width: 100%;
    img {
      width: 20%;
    }
    .texts {
      width: 70%;
      p {
        margin-top: 15px;
        font-size: 14px;
        opacity: 0.6;
      }
    }
    border-right: 1px dashed rgba(194, 180, 163, 0.2);
    padding: 40px 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .bottom {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .bottom .bottom-item:last-child {
    border: none;
  }
  @media (max-width: 576px) {
    .first-section {
      width: 95%;
      margin-top: 30px;
      padding-top: 20px;
    }
    .first-section-top {
      padding: 10px 0;
      padding-left: 18px;
      margin-bottom: 20px;
    }
    .first-section-top-texts {
      width: 95%;
    }

    .first-section-top img {
      display: none;
    }
    .first-section-top h2 {
      font-size: 22px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .first-section-top p {
      font-size: 13px;
    }

    .first-section-bottom {
      grid-template-columns: repeat(1, 1fr);
      :last-child {
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
      }
    }

    .first-mid {
      padding: 20px 18px;
      margin: 2Opx 0px;
    }

    .second-section {
      width: 95%;
      margin-top: 120px;
      border: 1px dashed rgba(194, 180, 163, 0.2);
      border-radius: 20px;
      button {
        font-size: 16px;
        width: 230px;
        width: 90%;
        padding: 1px 1px;
        height: 40px;
        border-radius: 3px;
        svg {
          font-size: 20px;
          margin-left: 5px;
        }
      }
    }
    .top {
      flex-direction: column;
      align-items: flex-start;
      padding: 30px 15px;
      h2 {
        font-size: 23px;
        margin-bottom: 15px;
      }
    }
    .bottom-item {
      border-bottom: 1px dashed rgba(194, 180, 163, 0.2);
    }
    .bottom {
      grid-template-columns: repeat(1, 1fr);
    }

    .bottom .bottom-item:last-child {
      border: none;
    }
  }
`;

export default Wrapper;

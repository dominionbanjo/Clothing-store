import styled from "styled-components";

const Wrapper = styled.section`
  width: 90%;
  margin: 0 auto 150px;

  .QandA {
    border: 1px dashed rgba(194, 180, 163, 0.2);
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;

    /* background-color: aliceblue; */
    width: 100%;
    margin-top: 60px;
    /* border-radius: 15px; */
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    padding-top: 50px;
    margin-bottom: 0px;
  }
  .QandA-top {
    width: 100%;
    padding-left: 40px;
    text-align: left;
    margin-bottom: 60px;
    position: relative;
    z-index: 1;
  }
  .QandA-top-texts {
    width: 76%;
    p {
      opacity: 0.6;
    }
  }

  .QandA-top img {
    position: absolute;
    top: -42px;
    right: 0;
    width: 220px;
    height: auto;
    border-top-right-radius: 10px;
    z-index: -1;
  }
  .QandA-top h2 {
    font-size: 40px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  .QandA-top p {
    font-size: 15px;
    letter-spacing: 1.5px;
  }

  .QandA-bottom {
    width: 100%;
    /* background-color: #81807e; */
  }
  .top-options {
    display: flex;
    margin-bottom: 80px;
    margin-left: 50px;
    text-transform: capitalize;
  }

  .button-shape {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 22px;
    padding: 20px 30px;
    /* background-color: #191919; */
    margin-right: 30px;
    border-radius: 5px;
    border: 1px dashed #81807e;
  }
  .active {
    background-color: #c7baaa;
    border: none;
  }

  .QandA-bottom {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .boxes {
    :last-child {
      border-bottom-right-radius: 25px;
    }
    :nth-last-child(2) {
      border-bottom-left-radius: 25px;
    }
  }
  .QandA-grid-item {
    border: 1px dashed rgba(194, 180, 163, 0.2);
    height: 200px;
    width: 100%;
    padding: 20px 50px;
    overflow: hidden;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .QandA-grid-item h3 {
    margin: 20px 0 10px;
  }
  .QandA-grid-item h4 {
    opacity: 0.6;
  }

  .QandA-grid-item p {
    margin: 0;
    font-size: 13px;
    opacity: 0.6;
  }
`;

export default Wrapper;
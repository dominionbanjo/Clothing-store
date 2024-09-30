import styled from "styled-components";

const Wrapper = styled.section`
  background-color: var(--dark-theme-background);
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  /* The wrapper's height will automatically fit the content */

  .top-hero {
    width: 100%;
    position: relative;
    top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .img-container {
    width: 100%;
    height: auto;
  }

  .top-hero img {
    /* margin-top: 30px; */
    width: 90%;
    display: block;
    margin: 0 auto;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  .bottom-hero {
    padding: 0 10px;
    width: 90%;
    margin-top: 40px;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .bottom-hero-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 1.5px;

    width: 40%;
  }
  .top-options {
    display: flex;
    margin-bottom: 40px;
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
  .bottom-hero-left h2 {
    font-size: 35px;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  .bottom-hero-left p {
    font-size: 15px;
    opacity: 0.6;
  }
  .bottom-hero-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 45%;
    letter-spacing: 1.5px;
  }
  .left-hero-grid {
    /* padding-left: 60px; */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 20px;
    margin: 0 auto;
  }

  .grid-item {
    padding: 20px;
    border-radius: 8px;
    text-align: left;
    h2 {
      margin: 0;
      font-size: 2rem;
    }

    p {
      margin: 0;
      font-size: 1rem;
      opacity: 0.6;
    }
  }

  .crafting {
    width: 90%;
    margin-top: 150px;
    border: 1px dashed rgba(194, 180, 163, 0.2);
    border-radius: 15px;
    padding-top: 50px;
    margin-bottom: 80px;
  }
  .crafting-top {
    width: 90%;
    padding-left: 40px;
    text-align: left;
    margin-bottom: 60px;
  }
  .crafting-top h2 {
    font-size: 40px;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  .crafting-top p {
    font-size: 15px;
    opacity: 0.6;
  }

  .crafting-bottom {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .crafting-grid-item {
    border: 1px dashed rgba(194, 180, 163, 0.2);
    height: 300px;
    width: 100%;

    position: relative;
    padding: 20px;
    overflow: hidden;
    text-align: left;
  }

  .crafting-grid-item img {
    /* width: 100%; */
    display: block;
    margin-bottom: 45px;
  }

  .crafting-grid-item img:nth-of-type(2) {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 140px;
    height: auto;
  }

  .crafting-grid-item h3 {
    margin: 20px 0 10px;
  }

  .crafting-grid-item p {
    margin: 0;
    font-size: 13px;
    opacity: 0.6;
  }

  .journey {
    width: 90%;
    margin-top: 150px;
    border: 1px dashed rgba(194, 180, 163, 0.2);
    border-radius: 15px;
    padding-top: 50px;
    margin-bottom: 80px;
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
    width: 85%;
  }

  .journey-top img {
    position: absolute;
    top: -47px;
    right: 0;
    width: 200px;
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
    opacity: 0.6;
  }

  .journey-bottom {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .journey-grid-item {
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

  .journey-grid-item h3 {
    margin: 20px 0 10px;
  }
  .journey-grid-item h4 {
    opacity: 0.6;
  }

  .journey-grid-item p {
    margin: 0;
    font-size: 13px;
    opacity: 0.6;
  }
  @media (max-width: 576px) {
    button {
      margin-top: 22px;
      font-size: 4px;
      width: 35px;
      padding: 1px 1px;
      height: 15px;
      border-radius: 3px;
      svg {
        font-size: 6px;
      }
    }
    .bottom-hero {
      margin-top: 30px;
      margin-bottom: 0px;
      flex-direction: column;
      justify-content: space-between;
    }
    .bottom-hero-left {
      width: 100%;
    }

    .top-options {
      width: 100%;
      margin-bottom: 20px;
      align-items: center;
      justify-content: space-between;
    }
    .button-shape {
      width: 60px;
      font-size: 14px;
      height: 22px;
      padding: 15px 35px;
      margin-right: 0px;
    }
    .bottom-hero-left h2 {
      font-size: 20px;
      margin-bottom: 15px;
    }
    .bottom-hero-left p {
      font-size: 14px;
    }
    .bottom-hero-right {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      letter-spacing: 1.5px;
    }
    .left-hero-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, auto);
      gap: 0px;

      margin: 0 auto;
    }

    .grid-item {
      /* background-color: #81807e; */
      width: 95%;
      padding: 10px 2px;
      border-radius: 8px;
      text-align: center;
      h2 {
        font-size: 20px;
      }

      p {
        font-size: 14px;
      }
    }

    .crafting {
      margin-top: 50px;
      padding-top: 20px;
      margin-bottom: 0px;
    }
    .crafting-top {
      width: 90%;
      padding-left: 15px;
      text-align: left;
      margin-bottom: 30px;
    }
    .crafting-top h2 {
      font-size: 20px;
      text-transform: uppercase;
      margin-bottom: 15px;
    }
    .crafting-top p {
      font-size: 13px;
    }

    .crafting-bottom {
      grid-template-columns: repeat(1, 1fr);
    }

    .journey {
      margin-top: 50px;
      padding-top: 50px;
      margin-bottom: 20px;
    }
    .journey-top {
      padding-left: 20px;
      margin-bottom: 40px;
    }

    .journey-top-texts {
      width: 95%;
    }

    .journey-top img {
      display: none;
    }
    .journey-top h2 {
      font-size: 20px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      margin-bottom: 15px;
    }
    .journey-top p {
      font-size: 13px;
      letter-spacing: 1.5px;
    }

    .journey-bottom {
      grid-template-columns: repeat(1, 1fr);
    }

    .journey-grid-item {
      height: 240px;
    }

    .journey-grid-item h3 {
      margin: 20px 0 10px;
    }
    .journey-grid-item h4 {
      opacity: 0.6;
    }

    .journey-grid-item p {
      margin: 0;
      font-size: 13px;
      opacity: 0.6;
    }
  }
`;

export default Wrapper;

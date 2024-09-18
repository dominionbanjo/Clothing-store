import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--dark-theme-background);
  display: flex;
  flex-direction: column;
  width: 100vw;
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
    width: 80%;
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
  }
  .bottom-hero-left p {
    font-size: 15px;
  }
  .bottom-hero-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;
    letter-spacing: 1.5px;
  }
  .left-hero-grid {
    /* padding-left: 60px; */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 20px;
    /* width: 100%; */
    /* max-width: 1200px; */
    margin: 0 auto;
  }

  .grid-item {
    padding: 20px;
    border-radius: 8px;
    text-align: left;
  }

  h2 {
    margin: 0;
    font-size: 2rem;
  }

  p {
    margin: 0;
    font-size: 1rem;
  }
  .crafting {
    width: 80%;
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
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  .crafting-top p {
    font-size: 15px;
  }

  .crafting-bottom {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
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
    width: 80%;
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
  }

  .journey-top img {
    position: absolute;
    top: -47px;
    right: 0;
    width: 200px;
    height: auto;
    border-top-right-radius: 10px;
  }
  .journey-top h2 {
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  .journey-top p {
    font-size: 15px;
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
`;

export default Wrapper;

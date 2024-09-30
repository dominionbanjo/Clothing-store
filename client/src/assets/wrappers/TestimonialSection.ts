import styled from "styled-components";

const Wrapper = styled.section.attrs({ className: "" })`
  display: flex;
  align-items: center;
  justify-content: center;
  .testimonial {
    width: 90%;
    margin-top: 150px;
    border: 1px dashed rgba(194, 180, 163, 0.2);
    border-radius: 15px;
    padding-top: 50px;
    margin-bottom: 150px;
  }
  .testimonial-top {
    width: 100%;
    padding-left: 40px;
    text-align: left;
    margin-bottom: 60px;
    position: relative;
    z-index: 1;
  }
  .testimonial-top-texts {
    width: 85%;
  }

  .testimonial-top img {
    position: absolute;
    top: -50px;
    right: 0;
    width: 254px;
    height: auto;
    border-top-right-radius: 10px;
    z-index: -1;
  }
  .testimonial-top h2 {
    font-size: 40px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  .testimonial-top p {
    font-size: 15px;
    letter-spacing: 1.5px;
    opacity: 0.6;
  }

  .testimonial-bottom {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    h3 img {
      width: 100%;
    }
    :last-child {
      border-bottom-right-radius: 15px;
    }
    :nth-last-child(3) {
      border-bottom-left-radius: 15px;
    }
  }

  .testimonial-grid-item {
    border: 1px dashed rgba(194, 180, 163, 0.2);
    height: 300px;
    width: 100%;
    padding: 20px 40px;
    overflow: hidden;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
      margin-bottom: 15px;
    }
  }

  .testimonial-grid-item h3 {
    margin: 20px 0 10px;
  }
  .testimonial-grid-item h4 {
    opacity: 0.6;
  }

  .testimonial-grid-item p {
    margin: 0;
    font-size: 13px;
    opacity: 0.6;
  }

  @media (max-width: 576px) {
    .testimonial {
      width: 95%;
      margin-top: 50px;
      padding-top: 25px;
      margin-bottom: 20px;
    }
    .testimonial-top {
      padding-left: 10px;
      margin-bottom: 20px;
    }
    .testimonial-top-texts {
      width: 95%;
    }

    .testimonial-top img {
      display: none;
    }
    .testimonial-top h2 {
      font-size: 20px;
      margin-bottom: 15px;
    }
    .testimonial-top p {
      font-size: 13px;
    }

    .testimonial-bottom {
      grid-template-columns: repeat(1, 1fr);

      :last-child {
        border-bottom-left-radius: 15px;
      }
    }

    .testimonial-grid-item {
      height: 280px;
    }
  }
`;

export default Wrapper;

import styled from "styled-components";

// const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   align-self: center;
//   /* justify-content: space-between; */
//   justify-content: center;
//   width: 100%;
//   padding: 0 10px;
//   margin: 0 auto;
// `;
const Wrapper = styled.div`
  /* background-color: antiquewhite; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  width: 90%;
  /* padding-left: 40px; */
  margin: 0 auto;
  justify-content: center;
  gap: 0;
`;

export default Wrapper;

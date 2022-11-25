import styled from 'styled-components';


const Animation = styled.div`
  width: 100px;
  height: 120px;
  margin: 1rem auto;
  /* background-color: violet; */
  background-size:cover;
  border-radius: 9px;
  box-shadow: rgba(0, 0, 0, 0.7) 0px 8px 24px;
  ${({ fundal }) => (fundal ? `background-image: url(${fundal})` : '')};
  `
export default Animation

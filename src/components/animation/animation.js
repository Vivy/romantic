import styled from 'styled-components';


const Animation = styled.div`
  /* display: flex; */
  width: 100px;
  height: 120px;
  margin: 1rem auto;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 9px;
  box-shadow: rgba(0, 0, 0, 0.7) 0px 8px 24px;
  ${({ fundal }) => (fundal ? `background-image: url(${fundal})` : '')};
  &:hover{
    /* flex-grow: 10; */
    /* position:absolute; */
    width:400px;
    height:400px;
    cursor: pointer;
  }
  `
export default Animation

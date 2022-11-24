import styled from 'styled-components';

const imagineMap = {
  car: 'src= urus.jpg',
  drink: 'src= vite.svg',
};

const Animation = styled.div`
  width: 100px;
  height: 120px;
  margin: 0 auto;
  /* background-color: violet; */
  ${({ fundal }) => (fundal ? `background-image: url(${fundal})` : '')};
  background-size:cover;
  border-radius: 9px;
  box-shadow: rgba(0, 0, 0, 0.7) 0px 8px 24px;
  `
export default Animation

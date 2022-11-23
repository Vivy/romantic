import { Nav } from '../nav';
import * as S from './menu.style';

const Menu = ({ functiaHandleMenu, functiaHandleItem }) => {
  return (
    <S.Menu>
      <Nav onClick={() => functiaHandleMenu('car')}>Car</Nav>
      <Nav onClick={() => functiaHandleMenu('drink')}>Drink</Nav>
      <Nav onClick={() => functiaHandleMenu('music')}>Music</Nav>
      <Nav onClick={() => functiaHandleMenu('tatoo')}>Tatoo</Nav>
      <Nav onClick={() => functiaHandleMenu('travel')}>Travel</Nav>
    </S.Menu>
  );
};
export default Menu;

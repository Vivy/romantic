import { Nav } from '../nav';
import * as S from './menu.style';

const Menu = ({ functiaHandleMenu }) => {
  return (
    <S.Menu>
      <Nav onClick={() => functiaHandleMenu('car')}>Car</Nav>
      <Nav
        onClick={() =>
          functiaHandleMenu(
            'drink' &&
              ((v) =>
                v.length
                  ? []
                  : [
                      { y: -100, delay: 200 },
                      { y: -50, delay: 400 },
                      { y: 0, delay: 600 },
                    ])
          )
        }
      >
        Drink
      </Nav>
      <Nav
        onClick={() =>
          functiaHandleMenu(
            'music' &&
              ((v) =>
                v.length
                  ? []
                  : [
                      { y: -100, delay: 200 },
                      { y: -50, delay: 400 },
                      { y: 0, delay: 600 },
                    ])
          )
        }
      >
        Music
      </Nav>
      <Nav
        onClick={() =>
          functiaHandleMenu(
            'tatoo' &&
              ((v) =>
                v.length
                  ? []
                  : [
                      { y: -100, delay: 200 },
                      { y: -50, delay: 400 },
                      { y: 0, delay: 600 },
                    ])
          )
        }
      >
        Tatoo
      </Nav>
      <Nav
        onClick={() =>
          functiaHandleMenu(
            'travel' &&
              ((v) =>
                v.length
                  ? []
                  : [
                      { y: -100, delay: 200 },
                      { y: -50, delay: 400 },
                      { y: 0, delay: 600 },
                    ])
          )
        }
      >
        Travel
      </Nav>
    </S.Menu>
  );
};
export default Menu;

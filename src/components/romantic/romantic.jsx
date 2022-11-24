import Car from '../car/car';
import Drink from '../drink/drink';
import Music from '../music/music';
import { Nav, GlobalStyle, Menu, Animation, Container } from '../';
import Tatoo from '../tatoo/tatoo';
import Travel from '../travel/travel';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { useTransition, animated } from 'react-spring';

const Romantic = () => {
  const [meniu, schimbaMeniu] = useState('');

  const transition = useTransition(meniu, {
    from: { x: 0, y: 800, opacity: 0 },
    enter: (item) => async (next) => {
      await next({ x: item.x, y: item.y, opacity: 1, delay: item.delay });
      // await next({ x: 0 });
    },
    leave: { x: 100, y: 800, opacity: 0 },
  });

  const handleMenu = (sectiune) => {
    schimbaMeniu(sectiune);
  };
  const dark = {
    firstColor: 'lightblue',
    secondColor: 'lightgreen',
    thirdColor: 'lightcoral',
  };
  const light = {
    firstColor: 'lightcoral',
    secondColor: 'lightgreen',
    thirdColor: 'lightblue',
  };

  const imagine = {
    car: 'urus.jpg',
    drink: 'vite.svg',
  };
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Menu functiaHandleMenu={handleMenu} />
      {meniu === 'car' ? <Car /> : null}
      {meniu === 'drink' ? <Drink /> : null}
      {meniu === 'music' ? <Music /> : null}
      {meniu === 'tatoo' ? <Tatoo /> : null}
      {meniu === 'travel' ? <Travel /> : null}
      <Container>
        {transition((style, item) =>
          item ? (
            <animated.div style={style}>
              <Animation fundal={imagine.car} />
            </animated.div>
          ) : (
            ''
          )
        )}
      </Container>
    </ThemeProvider>
  );
};

export default Romantic;

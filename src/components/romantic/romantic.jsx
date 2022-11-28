import Car from '../car/car';
import Drink from '../drink/drink';
import Music from '../music/music';
import { Nav, GlobalStyle, Menu, Animation, Container } from '../';
import Tatoo from '../tatoo/tatoo';
import Travel from '../travel/travel';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Romantic = () => {
  const animatiaVietii = useSpring({
    to: [{ opacity: 0, color: 'green' }, { opacity: 1 }],

    from: { opacity: 0, color: 'yellow' },
  });
  const [meniu, schimbaMeniu] = useState('');

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
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <animated.div style={animatiaVietii}>
        <Menu functiaHandleMenu={handleMenu} />
        {meniu === 'car' ? <Car /> : null}
        {meniu === 'drink' ? <Drink /> : null}
        {meniu === 'music' ? <Music /> : null}
        {meniu === 'tatoo' ? <Tatoo /> : null}
        {meniu === 'travel' ? <Travel /> : null}
      </animated.div>
    </ThemeProvider>
  );
};

export default Romantic;

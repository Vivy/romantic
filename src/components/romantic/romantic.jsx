import Car from '../car/car';
import Drink from '../drink/drink';
import Music from '../music/music';
import { Nav, GlobalStyle, Menu } from '../';
import Tatoo from '../tatoo/tatoo';
import Travel from '../travel/travel';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

const Romantic = () => {
  const [meniu, schimbaMeniu] = useState('car');
  const handleMenu = (sectiune) => {
    schimbaMeniu(sectiune);
    console.log('meniul vietii');
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
      <Menu functiaHandleMenu={handleMenu} />
      {meniu === 'car' ? <Car /> : null}
      {meniu === 'drink' ? <Drink /> : null}
      {meniu === 'music' ? <Music /> : null}
      {meniu === 'tatoo' ? <Tatoo /> : null}
      {meniu === 'travel' ? <Travel /> : null}
    </ThemeProvider>
  );
};

export default Romantic;

import Car from '../car/car';
import Drink from '../drink/drink';
import Music from '../music/music';
import { Nav, GlobalStyle, Menu } from '../';
import Tatoo from '../tatoo/tatoo';
import Travel from '../travel/travel';
import { ThemeProvider } from 'styled-components';

const Romantic = () => {
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
      <Menu />
      <h1>asndoajds</h1>
      <Car />
      <Drink />
      <Music />
      <Tatoo />
      <Travel />
      <Nav link='www.google.com' />
    </ThemeProvider>
  );
};

export default Romantic;

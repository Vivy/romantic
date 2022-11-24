import { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import { Animation } from '../animation';
import { Container } from '../container';
import { Imagine } from '../image';

const Drink = () => {
  const [drinkAnim, setDrinkAnim] = useState([]);
  const transition = useTransition(drinkAnim, {
    from: { x: 0, y: 300, opacity: 0 },
    enter: (item) => async (next) => {
      await next({ x: item.x, y: item.y, opacity: 1, delay: item.delay });
    },
    leave: { x: 100, y: 800, opacity: 0 },
  });
  return (
    <Container>
      <h2>What is your favorite drink?</h2>
      <button
        onClick={() =>
          setDrinkAnim((v) =>
            v.length
              ? []
              : [
                  { x: -500, y: 20, delay: 200 },
                  { x: -300, y: 20, delay: 400 },
                  { x: -200, y: 20, delay: 600 },
                ]
          )
        }
      ></button>
      {transition((style, item) =>
        item ? (
          <animated.div style={style}>
            <Animation fundal={Imagine.drink} />
          </animated.div>
        ) : (
          ''
        )
      )}
    </Container>
  );
};

export default Drink;

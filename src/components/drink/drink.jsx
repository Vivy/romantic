import { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import { Animation } from '../animation';
import { Container } from '../container';
import { imagine } from '../image/image';

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
      <h2>What is the most romantic drink?</h2>
      <button
        onClick={() =>
          setDrinkAnim((v) =>
            v.length
              ? []
              : [
                  { x: -500, y: 20, delay: 200, k: 0 },
                  { x: -300, y: 20, delay: 400, k: 1 },
                  { x: -200, y: 20, delay: 600, k: 2 },
                ]
          )
        }
      ></button>
      {transition((style, item, values) =>
        imagine.map(({ drink }, k) => {
          return item && values.item.k === k ? (
            <animated.div style={style} key={k}>
              <Animation fundal={drink} />
            </animated.div>
          ) : (
            ''
          );
        })
      )}
    </Container>
  );
};

export default Drink;

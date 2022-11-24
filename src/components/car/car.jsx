import { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import { Animation } from '../animation';
import { Container } from '../container';
import { Imagine } from '../image';

const Car = () => {
  const [carAnim, changeCarAnim] = useState([]);

  const transition = useTransition(carAnim, {
    from: { x: 0, y: 300, opacity: 0 },
    enter: (item) => async (next) => {
      await next({ x: item.x, y: item.y, opacity: 1, delay: item.delay });
      // await next({ x: 0 });
    },
    leave: { x: 100, y: 800, opacity: 0 },
  });
  return (
    <div>
      <Container>
        <h2>Which is your favorite car?</h2>
        <button
          onClick={() =>
            changeCarAnim((v) =>
              v.length
                ? []
                : [
                    { x: -480, y: 20, delay: 200 },
                    { x: -360, y: -100, delay: 400 },
                    { x: -240, y: -220, delay: 600 },
                  ]
            )
          }
        ></button>
        {transition((style, item) =>
          item ? (
            <animated.div style={style}>
              <Animation fundal={Imagine.car} />
            </animated.div>
          ) : (
            ''
          )
        )}
      </Container>
    </div>
  );
};
export default Car;

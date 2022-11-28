import { useState } from 'react';
import { useTransition, animated, useSpring } from 'react-spring';
import { Animation } from '../animation';
import { Container } from '../container';
import { imagine } from '../image/image';

const Car = () => {
  const styles = useSpring({
    loop: true,
    to: async (next, done) => {
      await next({ opacity: 1, color: 'red' });
      await next({ opacity: 0, color: 'blue' });
    },
    from: { opacity: 0, color: 'violet' },
  });

  const [carAnim, changeCarAnim] = useState([]);

  const transition = useTransition(carAnim, {
    from: { x: 0, y: 300, opacity: 0 },
    enter: (item) => async (next) => {
      await next({ x: item.x, y: item.y, opacity: 1, delay: item.delay });
      await next({ x: 480, y: item.y, opacity: 1, delay: item.delay });
      await next({ x: 0, y: 100, height: 200, width: 250 });
    },
    leave: { x: 100, y: 800, opacity: 0 },
  });
  return (
    <Container>
      <animated.div style={styles}>
        <h2>Which one is the most romantic car ?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quod
          quasi velit fuga, facere delectus a omnis quisquam minima laborum est.
          Voluptatem, vel debitis. Nam iste repudiandae totam sed ut.
        </p>
      </animated.div>
      <button
        onClick={() =>
          changeCarAnim((v) =>
            v.length
              ? []
              : [
                  { x: -480, y: 20, delay: 200, k: 0 },
                  { x: -360, y: -100, delay: 400, k: 1 },
                  { x: -240, y: -220, delay: 600, k: 2 },
                ]
          )
        }
      >
        Surprise Motherfucker
      </button>
      {transition((style, item, values) =>
        imagine.map(({ car }, k) => {
          return item && values.item.k === k ? (
            <animated.div style={style} key={k}>
              <Animation fundal={car} />
            </animated.div>
          ) : (
            ''
          );
        })
      )}
    </Container>
  );
};
export default Car;

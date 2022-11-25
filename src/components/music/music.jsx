import { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import { Animation } from '../animation';
import { Container } from '../container';
import { imagine } from '../image/image';

const Music = () => {
  const [musicAnim, changeMusicAnim] = useState([]);

  const transition = useTransition(musicAnim, {
    from: { x: 0, y: 300, opacity: 0 },
    enter: (item) => async (next) => {
      await next({ x: item.x, y: item.y, opacity: 1, delay: item.delay });
      await next({ x: 0 });
    },
    leave: { x: 100, y: 800, opacity: 0 },
  });

  return (
    <Container>
      <h2>Selelct the most romantic music</h2>
      <button
        onClick={() =>
          changeMusicAnim((v) =>
            v.legth
              ? []
              : [
                  { x: -480, y: 20, delay: 200, k: 0 },
                  { x: -360, y: -100, delay: 400, k: 1 },
                  { x: -240, y: -220, delay: 600, k: 2 },
                ]
          )
        }
      ></button>
      {transition((style, item, values) =>
        imagine.map(({ music }, k) => {
          return item && values.item.k === k ? (
            <animated.div style={style} key={k}>
              <Animation fundal={music} />
            </animated.div>
          ) : (
            ''
          );
        })
      )}
    </Container>
  );
};

export default Music;

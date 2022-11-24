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
      <h2>Let`s get the party started</h2>
      <button
        onClick={() =>
          changeMusicAnim((v) =>
            v.legth
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
        imagine.map(({ music }, k) => {
          return item ? (
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

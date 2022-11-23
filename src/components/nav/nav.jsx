import * as S from './nav.style';

const Nav = ({ link, children }) => {
  return (
    <S.Nav>
      <a href={link}>{children} asdasd</a>
    </S.Nav>
  );
};

export default Nav;

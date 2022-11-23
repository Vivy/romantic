import * as S from './nav.style';

const Nav = ({ children, onClick }) => {
  return <S.Nav onClick={onClick}>{children}</S.Nav>;
};

export default Nav;

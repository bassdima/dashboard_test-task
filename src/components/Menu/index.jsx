import './styles.scss';
import { Navbar, UserInfo } from '../index';
import { useResponsive } from '../../hooks';

export const Menu = ({ isClicked }) => {
  const { isDesktop } = useResponsive();
  return (
    <div className='menu-container' style={{ display: !isDesktop && isClicked ? 'none' : 'flex' }}>
        <div className='menu'>
            <Navbar />
            <UserInfo />
        </div>
    </div>
  );
}

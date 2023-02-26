import './styles.scss';
import { useResponsive } from '../../hooks';

export const Header = ({ setIsClicked, isClicked }) => {
  const { isDesktop } = useResponsive();
  return (
    <header className="header">
      {!isDesktop &&
        <img
          src="/assets/icon-hamburger.svg"
          alt="icon-hamburger"
          onClick={() => {
            setIsClicked(!isClicked);
            document.body.style.overflow = isClicked ? 'hidden' : 'visible';
          }}
        />}
      <div className='logo-container'>
        <img className='logo-container__logo' src="/assets/logo.svg" alt="logo" />
        <p className='logo-container__title'>
          Dashboard
          <span className='logo-container__version'>
            v.01
          </span>
        </p>
      </div>
    </header>
  );
}

import './styles.scss';
import { navbarContent } from '../../constans'

export const Navbar = () => {
    return (
        <nav className='navbar'>
            {Object.keys(navbarContent).map((item) => {
                return (
                    <a className='navbar__link' href={`/${item}`} key={item}>
                        <input
                            type="radio"
                            name="navbar-btn"
                            id={item}
                            className="navbar__radio"
                            defaultChecked={item === "customers"}
                        />
                        <label htmlFor={item} className='navbar__btn-container'>
                            <img className='navbar__btn-icon' src={navbarContent[item]} alt={`${item}-icon`} />
                            <p className='navbar__btn-name'>{item}</p>
                            {item !== 'dashboard' &&
                                <img
                                    className='navbar__btn-chevron'
                                    src="/assets/chevron-right.svg"
                                    alt="chevron-right-icon"
                                />}
                        </label>
                    </a>
                )
            })}
        </nav>
    );
}

import './styles.scss';

export const Search = () => {
    return (
        <label className="search">
            <img src="/assets/search.svg" alt="search-icon" />
            <input className="search__input" type="text" placeholder="Search" />
        </label>
    );
}

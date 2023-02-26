import './styles.scss';
import { Search } from '../index';

export const CustomersHeader = () => {
    return (
        <header className="customers-card-header">
            <div className="customers-card-title">
                <h2 className="customers-card-title__all">All Customers</h2>
                <p className="customers-card-title__active">Active Members</p>
            </div>
            <Search />
        </header>
    );
}

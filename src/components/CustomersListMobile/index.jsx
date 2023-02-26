import './styles.scss';
import { CustomersHeader, CustomersStatus } from '../index';

export const CustomersListMobile = ({ data }) => {
    return (
        <section className='customers-list-mobile-wrapper'>
        <CustomersHeader />
            {
                data.map((item) =>
                    <div key={item.id} className='customers-mobile-card'>
                        <div className='customers-mobile-card__row'>
                            <div className='customers-mobile-card__column'>
                                <p className="customers-mobile-card__name">{item.name}</p>
                                <p className="customers-mobile-card__country"> {item.country}</p>
                            </div>
                            <p className="customers-mobile-card__company">{item.company}</p>
                        </div>
                        <div className='customers-mobile-card__row'>
                            <div className='customers-mobile-card__column'>
                                <p className="customers-mobile-card__phone">{item.phone}</p>
                                <p className="customers-mobile-card__email">{item.email}</p>
                            </div>
                            <CustomersStatus data={item.status} />
                        </div>
                    </div>
                )
            }
        </section>
    );
}

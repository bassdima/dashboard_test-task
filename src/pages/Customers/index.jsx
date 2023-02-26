import './styles.scss';
import { CustomersListTablet, CustomersListMobile } from '../../components';
import { useResponsive } from '../../hooks';
import data from '../../data.json';

export const Customers = () => {
  const { isTablet } = useResponsive();
  console.log(isTablet);
  return (
    <section className="customers-page">
      <h2 className="customers-page__greetings">Hello Evano👋🏼,</h2>
      {!isTablet ?
        <CustomersListMobile data={data} />
        :
        <CustomersListTablet data={data} />
      }
    </section>
  );
}

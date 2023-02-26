import './styles.scss';
import {
  CustomersHeader,
  CustomersTable,
} from "../index";

export const CustomersListTablet = ({data}) => {

  return (
    <section className="customers-card">
      <CustomersHeader />
      <CustomersTable data={data} />
    </section>
  );
}
import './styles.scss';

export const CustomersStatus = ({ data }) => {
    return (
        <div
            className={
                `customers-status 
                ${data === 'Active' ?
                'customers-status_active' :
                'customers-status_inactive'}`
            }
        >
            {data}
        </div>
    );
}

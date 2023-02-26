import './styles.scss';
import { customersSectionsContent, cardButtonsContent } from '../../constans';
import { CustomersStatus } from '../index';
import { Fragment } from "react"

export const CustomersTable = ({ data }) => {
  return (
    <table className="customers-table">
      <thead className='customers-table-header'>
        <tr>
          {customersSectionsContent.map((item) =>
            <th key={item} className='customers-table-header__data'>{item}</th>
          )}
        </tr>
        <hr className='customers-table-header__hr' />
      </thead>
      <tbody>
        {data.map((item) =>
          <tr className="customers-table-body" key={item.id}>
            <td className="customers-table-body__content">{item.name}</td>
            <td className="customers-table-body__content">{item.company}</td>
            <td className="customers-table-body__content">{item.phone}</td>
            <td className="customers-table-body__content">{item.email}</td>
            <td className="customers-table-body__content">{item.country}</td>
            <td className="customers-table-body__content">
              <CustomersStatus data={item.status} />
            </td>
          </tr>
        )}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="3" className="customers-table-footer__content customers-table-footer__content-right">
            <p className='customers-table-footer__number-of-items'>Showing data 1 to 8 of  256K entries</p>
          </td>
          <td colSpan="3" className="customers-table-footer__content customers-table-footer__content-left">
            <div className='customers-table-footer__container-btns'>
              <button className='customers-table-footer__btn'>&lt;</button>
              {cardButtonsContent.map((item) =>
                <Fragment key={item}>
                  {item === "..." ?
                    <div className='customers-table-footer__btn customers-table-footer__hidden-btn'>{item}</div>
                    :
                    <>
                      <input
                        className='customers-table-footer__radio'
                        type="radio"
                        name="table-btn"
                        id={item}
                        defaultChecked={item === "1"}
                      />
                      <label
                        htmlFor={item}
                        className='customers-table-footer__btn'
                      >
                        {item}
                      </label>
                    </>
                  }
                </Fragment>
              )}
              <button className='customers-table-footer__btn'>&gt;</button>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

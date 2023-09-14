import PropTypes from 'prop-types';

const CartCalculate = ({selectCourse, credit,remaining, price}) => {
    return (
        <div className="m-2 bg-slate-100 p-3">
            <h2 className="text-blue-500 font-semibold">Credit Hour Remaining {remaining} hr</h2>
            <div className="border border-b-slate-400">
            </div>
            <div>
                <h2 className="text-xl font-semibold">Course Name</h2>
                {
                    selectCourse.map(select => (
                        <p key={select.id}>{select.name}</p>
                    ))
                }
            </div>
            <div className="border border-b-slate-400">
            </div>
            <h2 className="text-base">Total Credit Hour : {credit}</h2>
            <div className="border border-b-slate-400">
            </div>
            <h2 className="text-lg font-normal">
            Total Price : {price} USD
            </h2>
        </div>
    );
};
CartCalculate.propTypes = {
    selectCourse: PropTypes.array.isRequired,
    credit: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  };

export default CartCalculate;
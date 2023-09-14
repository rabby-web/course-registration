import PropTypes from 'prop-types';

const CartCalculate = ({selectCourse}) => {
    return (
        <div className="m-2 bg-slate-100 p-3">
            <h2 className="text-blue-500 font-semibold">Credit Hour Remaining 7 hr</h2>
            <div className="border border-b-slate-500">
            </div>
            <div>
                <h2 className="text-xl font-semibold">Course Name</h2>
                {
                    selectCourse.map(select => <p key={select.id}>{select.name}</p>)
                }
            </div>
            <div className="border border-b-slate-500">
            </div>
            <h2 className="text-base">Total Credit Hour : 13</h2>
            <div className="border border-b-slate-500">
            </div>
            <h2 className="text-lg font-normal">
            Total Price : 48000 USD
            </h2>
        </div>
    );
};
CartCalculate.propTypes = {
    selectCourse: PropTypes.array.isRequired,
  };

export default CartCalculate;
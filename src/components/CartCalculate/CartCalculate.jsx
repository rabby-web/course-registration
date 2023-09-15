import PropTypes from 'prop-types';

const CartCalculate = ({selectCourse, credit,remaining, price}) => {
    return (
        <div className="bg-gray-100 m-1 p-4 rounded-lg">
            <h2 className="text-[#2F80ED] font-bold mb-3">Credit Hour Remaining {remaining} hr</h2>
            <div className="border-b border-b-gray-300">
            </div>
            <div>
                <h2 className="text-[#1C1B1B] font-bold text-lg my-2">Course Name</h2>
                <ol className='text-[#1C1B1B99] text-sm leading-6 font-medium mb-4 list-decimal ml-4'>
                {
                    selectCourse.map((select, idx) => (
                        <li key={idx}>{select.name}</li>
                    ))
                }
                </ol>
            </div>
            <div className="border-b border-b-gray-300">
            </div>
            <h2 className="text-[#1C1B1BCC] text-sm font-medium my-3">Total Credit Hour : {credit}</h2>
            <div className="border-b border-b-gray-300">
            </div>
            <h2 className="text-[#1C1B1BCC] font-bold mt-3">
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
import PropTypes from 'prop-types';

const Carts = ({data,handleClickSelect}) => {
    const {name, image_url,description,price,credit} = data
    return (
        <div className='m-2 border bg-white rounded shadow-lg p-2 space-y-2'>
            <div>
                <img className='w-full' src={image_url} alt="" />
            </div>
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className='leading-7'>{description}</p>
            <div className='flex justify-between'>
                <div className='flex'>
                    <img src="./usd.svg" alt="" />
                    <h2>Price: {price}</h2>
                </div>
                <div className='flex'>
                <img src="./book.svg" alt="" />
                    <h2>credit: {credit}</h2>
                </div>
            </div>
            <button onClick={()=> handleClickSelect(data)} className='font-semibold text-lg text-white bg-blue-700 w-full p-2 rounded-lg'>Select</button>
        </div>
    );
};
Carts.propTypes = {
    data: PropTypes.object.isRequired,
    handleClickSelect: PropTypes.func.isRequired
  };
export default Carts;
import PropTypes from 'prop-types';

const Carts = ({data}) => {
    const {name, image_url,description,price} = data
    return (
        <div className='m-2 border bg-white rounded shadow-lg p-2 space-y-2'>
            <div>
                <img className='w-full' src={image_url} alt="" />
            </div>
            <h2 className="text-xl font-semibold">{name}</h2>
            <p>{description}</p>
            <div className='flex justify-around'>
                <div className='flex'>
                    <img src="./doller.svg" alt="" />
                    <h2>Price: {price}</h2>
                </div>
                <div className='flex'>
                <img src="./book.svg" alt="" />
                    <h2>credit: {price}</h2>
                </div>
            </div>
            <button className='font-semibold text-lg text-white bg-blue-700 w-full p-2 rounded-lg'>Select</button>
        </div>
    );
};
Carts.propTypes = {
    data: PropTypes.object.isRequired
  };
export default Carts;
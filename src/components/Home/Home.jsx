import { useEffect, useState } from "react";
import Carts from "../Carts/Carts";
import CartCalculate from "../CartCalculate/CartCalculate";


const Home = () => {
    const [loadData, setLoadData] = useState([]);
    const [selectCourse, setSelectCourse] = useState([]);
    const [remaining, setRemaining] = useState(20);
    const [credit, setCredit] = useState(0);
    const [price, setPrice] = useState(0);
    useEffect( () => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setLoadData(data))
    } ,[])
    console.log(loadData)

    const handleClickSelect = data => {
        const newRemaining = remaining - data.credit;
        setRemaining(newRemaining)

        const newCredit = credit + data.credit;
        setCredit(newCredit)

        const newPrice = price + data.price;
        setPrice(newPrice)

        setSelectCourse([...selectCourse, data])
    }
    return (
        <div className="grid grid-cols-12 container mx-auto">
            <div className="col-span-12 md:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    loadData.map(data => <Carts
                    key={data.id}
                    data={data}
                    handleClickSelect={handleClickSelect}
                    ></Carts>)
                }
                </div>
            </div>
            <div className="col-span-12 md:col-span-4">
                <CartCalculate
                selectCourse={selectCourse}
                credit={credit}
                price={price}
                remaining={remaining}
                ></CartCalculate>
            </div>
        </div>
    );
};

export default Home;
import { useEffect, useState } from "react";
import Carts from "../Carts/Carts";
import CartCalculate from "../CartCalculate/CartCalculate";


const Home = () => {
    const [loadData, setLoadData] = useState([]);
    useEffect( () => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setLoadData(data))
    } ,[])
    console.log(loadData)
    return (
        <div className="grid grid-cols-12 container mx-auto">
            <div className="col-span-12 md:col-span-9">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    loadData.map(data => <Carts
                    key={data.id}
                    data={data}
                    ></Carts>)
                }
                </div>
            </div>
            <div className="col-span-12 md:col-span-3 text-center">
                <CartCalculate></CartCalculate>
            </div>
        </div>
    );
};

export default Home;
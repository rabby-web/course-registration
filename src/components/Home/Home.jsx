import { useEffect, useState } from "react";
import Carts from "../Carts/Carts";
import CartCalculate from "../CartCalculate/CartCalculate";
import Swal from "sweetalert2";



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
        const isExist = selectCourse.find(item => item.id == data.id);
        
        if(isExist){
            return (
                Swal.fire({
                    icon: 'error',
                    title: 'Sorry...',
                    text: 'This Course Already is Exist!',
                  })
            )
        }
        else{
            if(remaining < data.credit){
                return (
                    Swal.fire({
                        icon: 'warning',
                        title: 'Sorry...',
                        text: 'Credit Hour Remaining and Total Credit Hour Insufficient',
                      })
                )
            }
            else{
               const newRemaining = remaining - data.credit;
        setRemaining(newRemaining)

        const newCredit = credit + data.credit;
        setCredit(newCredit)

        const newPrice = price + data.price;
        setPrice(newPrice)

        setSelectCourse([...selectCourse, data]) 
            }
        }
    }
    return (
        <div className="grid grid-cols-12 mx-2 md:mx-10">
            <div className="col-span-12 md:col-span-9">
                <div className="grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                {
                    loadData.map(data => <Carts
                    key={data.id}
                    data={data}
                    handleClickSelect={handleClickSelect}
                    ></Carts>)
                }
                </div>
            </div>
            <div className="col-span-12 md:col-span-3">
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
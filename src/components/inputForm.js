import { useState } from 'react';
import axios from 'axios'
function InputForm(props) {

    let [itemName, setItemName] = useState('');
    let [itemRate, setItemRate] = useState('');
    let [itemDate, setItemDate] = useState('');


    function itemNameHandler(e) {
        setItemName(e.target.value);
    }

    function itemRateHandler(e) {
        setItemRate(e.target.value);
    }

    function itemDateHandler(e) {
        setItemDate(e.target.value);
    }

    function sumbitHandler(e) {
        e.preventDefault();
        const expenseItems = {

            "itemName": itemName,
            "prize": itemRate,
            "date": itemDate,
        }
        console.log(expenseItems)


        setItemName('')
        setItemRate('')
        setItemDate('')

        props.itemOjectHandlers(expenseItems);

        axios.post('/api/v1/wantItem', JSON.stringify(expenseItems), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }



    return (
        <>
            <div id="container" className="bg-red-600 rounded-t-lg border-2 sticky top-0
            ">
                <div className="bg-yellow-200 p-4 rounded-full">
                    <form action="" onSubmit={sumbitHandler} className="flex justify-between items-center ">
                        <div >
                            <div className="p-2 flex gap-2 font-bold text-lg">
                                <label htmlFor="name">Enter Item</label>
                                <input type="text" id="name" value={itemName} onChange={itemNameHandler} className="shadow-lg shadow-black" />
                            </div>
                            <div className="p-2 flex gap-3.5 font-bold text-lg">
                                <label htmlFor="rate">Rate item</label>
                                <input type="number" id="rate" value={itemRate} onChange={itemRateHandler} className="shadow-lg shadow-black" />
                            </div>
                            <div className="p-2 flex gap-3 font-bold text-lg ">
                                <label htmlFor="date">Item Date</label>
                                <input type="Date" id="date" className="w-[240px] shadow-lg shadow-black" value={itemDate} onChange={itemDateHandler} />
                            </div>

                        </div>
                        <button type="submit" className="p-2 w-40 bg-purple-400 border-[2px] border-black rounded-lg font-bold text-lg hover:bg-purple-500 shadow-lg shadow-black mr-7">ADD</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default InputForm;
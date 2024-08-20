function List(props) {
    let storeDate = props.passItemsData.date;
    console.log(storeDate);
    let year = storeDate.slice(0, 4);
    let month = storeDate.slice(5, 7);
    let day = storeDate.slice(8)
    console.log(year);
    console.log(month);
    console.log(day);
    // let day = props.passItemsData.date.toLocaleString('en-US', { day: '2-digit' });
    // let month = props.passItemsData.date.toLocaleString('en-US', { month: 'long' });
    // let year = props.passItemsData.date.getFullYear();
    // console.log(props.passItemsData.date)


    return (
        <>
            <div className="bg-red-400 rounded-lg flex items-center justify-between border-2 border-black font-bold h-[85px] shadow-lg shadow-gray-900" >
                <div className="h-[75px] w-[70px] border-2 border-black p-1 rounded-lg bg-gray-900 text-white ml-2 flex flex-col items-center  shadow-lg shadow-gray-900">
                    <p className="text-2xl">{day}</p>
                    <p className="text-sm">{month}</p>
                    <p className="text-sm">{year}</p>

                </div>
                <div className="ml-[-400px] text-2xl text-gray-900">
                    {props.passItemsData.itemName}
                </div>
                <div className="border-2 border-black rounded-lg mr-3 p-2 px-4 bg-blue-900 text-white shadow-lg shadow-black ">
                    $ {props.passItemsData.prize}
                </div>
            </div>
        </>
    )
}

export default List;
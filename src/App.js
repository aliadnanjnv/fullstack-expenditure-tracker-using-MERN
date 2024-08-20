import InputForm from "./components/inputForm";
import List from "./components/list.js"
import { useState, useEffect } from 'react'
import axios from 'axios';
function App() {
  let arrOfItems = [
    {
      id: "01",
      itemName: "Item Name",
      prize: "prize",
      date: "254"

    }
  ]

  let [storeData, setStoreData] = useState(arrOfItems);

  function itemObjectHandler(expensesItem) {
    let allItems = [expensesItem, ...storeData]
    console.log(expensesItem);
    // setStoreData(allItems);
  }
  useEffect(() => {
    axios.get("/api/v1/items")
      .then((response) => {
        console.log(response.data.itemData);
        setStoreData(response.data.itemData)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])


  return (
    <>
      <div className=" max-w-full min-h-screen pt-[30px] 
      bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
        <div className="bg-gray-700 w-[900px]  m-auto border-[4px] border-gray-900 shadow-lg shadow-black rounded-lg" >

          <InputForm itemOjectHandlers={itemObjectHandler}></InputForm>

          {
            storeData.map((items) => {
              return (
                <>
                  <List passItemsData={items}></List>
                </>
              )
            })
          }

        </div>
      </div>
    </>
  );
}

export default App;

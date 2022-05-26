import React from "react"
import "./inventory.css"

export default function Inventory() {

    const [data, setData] = React.useState({
        id: "",
        product_name: "",
        product_description: "",
        product_unit: "",
        product_quantity: "",
        unit_cost: "",
        price: "",
        least_critical_amount: "",
        high_amount: "",
        created_at: "",
        updated_at: "",
        expire_date: "",
        category: "",
        brand: "",
        by: ""
    });


    React.useEffect(() => {
        fetch("http://localhost:3000/erpdatabase/inventory")
            .then(res => res.json())
                .then(data => console.log(data))
            .catch(error => console.log(error))
    }, [])


    function fieldChangeHandler(event){
        const target = event.target
        const {name, value, type} = target


        setData(prevData => {
            return {
                ...prevData,
                [name]: value
            } 
        })

    }


    function addInventory(event) {
        fetch("http://localhost:3000/erpdatabase/inventory/add", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then(data => console.log(data))
        .catch(err => console.log("error " + err))

        console.log("Add Inventory")

    }


    return(
        <div className="inventory">

            <div className="add">

                <div className="lbl">
                    <label>Name</label>
                    <input 
                        type="text" 
                        placeholder="add" 
                        onChange={fieldChangeHandler}
                        value={data.product_name}
                        name="product_name"/>
                </div>

                <div className="lbl">
                    <label>Description</label>
                    <input 
                        type="text" 
                        placeholder="add" 
                        onChange={fieldChangeHandler}
                        value={data.product_description}
                        name="product_description"/>
                </div>

                <div className="lbl">
                    <label>Unit</label>
                    <input 
                        type="text" 
                        placeholder="add" 
                        onChange={fieldChangeHandler}
                        value={data.product_unit}
                        name="product_unit"/>
                </div>

                <div className="lbl">
                    <label>Quantity</label>
                    <input 
                        type="text" 
                        placeholder="add" 
                        onChange={fieldChangeHandler}
                        value={data.product_quantity}
                        name="product_quantity"/>
                </div>

                <div className="lbl">
                    <label>Unit-Cost</label>
                    <input 
                        type="text" 
                        placeholder="add" 
                        onChange={fieldChangeHandler}
                        value={data.unit_cost}
                        name="unit_cost"/>
                </div>

                <div className="lbl">
                    <label>Price</label>
                    <input 
                        type="text" 
                        placeholder="add" 
                        onChange={fieldChangeHandler}
                        value={data.price}
                        name="price"/>
                </div>

                <div className="lbl">
                    <label>Least Critical Amount</label>
                    <input 
                        type="text" 
                        placeholder="add" 
                        onChange={fieldChangeHandler}
                        value={data.least_critical_amount}
                        name="least_critical_amount"/>
                </div>

                <div className="lbl">
                    <label>High Amount</label>
                    <input 
                        type="text" 
                        placeholder="add" 
                        onChange={fieldChangeHandler}
                        value={data.high_amount}
                        name="high_amount"/>
                </div>

                <div className="lbl">
                    <label>Expire Date</label>
                    <input 
                        type="text" 
                        placeholder="add" 
                        onChange={fieldChangeHandler}
                        value={data.expire_date}
                        name="expire_date"/>
                </div>

                <div className="lbl">
                    <label>Category</label>
                    <input 
                        type="text" 
                        placeholder="add" 
                        onChange={fieldChangeHandler}
                        value={data.category}
                        name="category"/>
                </div>

                <div className="lbl">
                    <label>Brand</label>
                    <input 
                        type="text" 
                        placeholder="add" 
                        onChange={fieldChangeHandler}
                        value={data.brand}
                        name="brand"/>
                </div>

                <div className="lbl">
                    <label>Added By</label>
                    <input 
                        type="text" 
                        placeholder="add" 
                        onChange={fieldChangeHandler}
                        value={data.by}
                        name="by"/>
                </div>

                <button onClick={addInventory}>Add</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Unit</th>
                        <th>Quantity</th>
                        <th>Unit-Cost</th>
                        <th>Price</th>
                        <th>LCA</th>
                        <th>High</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th>Expire Date</th>
                        <th>Category</th>
                        <th>Brand</th>
                        <th>Added By</th>
                    </tr>
                </thead>

            </table>
            
        </div>
    );
}
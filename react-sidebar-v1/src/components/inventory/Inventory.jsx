import React from "react"
import "./inventory.css"

import StickyHeadTable from './InventoryTable'

export default function Inventory() {

    const [formData, setFormData] = React.useState({
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

    const [items, setItems] = React.useState([{
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
    }]);

    React.useEffect(() => {
        fetch("http://localhost:3000/erpdatabase/inventory")
            .then(res => res.json())
                .then(data => {
                    setItems(data);
                })
            .catch(error => console.log(error))
    }, [])


    function fieldChangeHandler(event){
        const target = event.target
        const {name, value} = target


        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            } 
        })

    }


    function addInventory(event) {
        fetch("http://localhost:3000/erpdatabase/inventory/add", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then(data => console.log("add " + data))
        .catch(err => console.log("error " + err))

        console.log("Add Inventory")

    }


    return(
        <div className="inventory">

            <div className="add">

                <div className="lbl--group">
                    <div className="lbl">
                        <label>Name</label>
                        <input 
                            type="text" 
                            placeholder="add" 
                            onChange={fieldChangeHandler}
                            value={formData.product_name}
                            name="product_name"/>
                    </div>

                    <div className="lbl">
                        <label>Description</label>
                        <input 
                            type="text" 
                            placeholder="add" 
                            onChange={fieldChangeHandler}
                            value={formData.product_description}
                            name="product_description"/>
                    </div>
                </div>

                <div className="lbl--group">
                    <div className="lbl">
                        <label>Unit</label>
                        <input 
                            type="text" 
                            placeholder="add" 
                            onChange={fieldChangeHandler}
                            value={formData.product_unit}
                            name="product_unit"/>
                    </div>

                    <div className="lbl">
                        <label>Quantity</label>
                        <input 
                            type="text" 
                            placeholder="add" 
                            onChange={fieldChangeHandler}
                            value={formData.product_quantity}
                            name="product_quantity"/>
                    </div>

                    <div className="lbl">
                        <label>Unit-Cost</label>
                        <input 
                            type="text" 
                            placeholder="add" 
                            onChange={fieldChangeHandler}
                            value={formData.unit_cost}
                            name="unit_cost"/>
                    </div>
                </div>

                <div className="lbl--group">

                    <div className="lbl">
                        <label>Price</label>
                        <input 
                            type="text" 
                            placeholder="add" 
                            onChange={fieldChangeHandler}
                            value={formData.price}
                            name="price"/>
                    </div>

                    <div className="lbl">
                        <label>Least Critical Amount</label>
                        <input 
                            type="text" 
                            placeholder="add" 
                            onChange={fieldChangeHandler}
                            value={formData.least_critical_amount}
                            name="least_critical_amount"/>
                    </div>

                    <div className="lbl">
                        <label>High Amount</label>
                        <input 
                            type="text" 
                            placeholder="add" 
                            onChange={fieldChangeHandler}
                            value={formData.high_amount}
                            name="high_amount"/>
                    </div>
                </div>

                <div className="lbl--group">
                    <div className="lbl">
                        <label>Category</label>
                        <input 
                            type="text" 
                            placeholder="add" 
                            onChange={fieldChangeHandler}
                            value={formData.category}
                            name="category"/>
                    </div>

                    <div className="lbl">
                        <label>Brand</label>
                        <input 
                            type="text" 
                            placeholder="add" 
                            onChange={fieldChangeHandler}
                            value={formData.brand}
                            name="brand"/>
                    </div>
                    
                    <div className="lbl">
                        <label>Expire Date</label>
                        <input 
                            type="text" 
                            placeholder="add" 
                            onChange={fieldChangeHandler}
                            value={formData.expire_date}
                            name="expire_date"/>
                    </div>
                </div>

                <button onClick={addInventory}>Add</button>
            </div>

            <StickyHeadTable 
                items={items}
                />
            
        </div>
    );
}
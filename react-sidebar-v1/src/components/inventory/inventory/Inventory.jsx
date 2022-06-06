import React from "react"
import "./inventory.css"

import StickyHeadTable from './InventoryTable'

export default function Inventory() {

    const [change, setChange] = React.useState(true)

    const [brandItems, setBrandItems] = React.useState([{
        id: "",
        name: ""
    }]);

    const [categoryItems, setCategoryItems] = React.useState([{
        id: "",
        name: ""
    }]);

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
        category: "1",
        brand: "1",
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


        fetch("http://localhost:3000/erpdatabase/category")
            .then(res => res.json())
                .then(data => {
                    setCategoryItems(data);
                })
            .catch(error => console.log(error))

        fetch("http://localhost:3000/erpdatabase/brand")
            .then(res => res.json())
                .then(data => {
                    setBrandItems(data);
                })
            .catch(error => console.log(error))

    }, [change])


    // the object containing the regex
    let reg = {
        product_name: /^[a-zA-Z0-9(),\-_ ]{1,50}$/,

        product_description: /^[a-zA-Z0-9(),\-_ ]{0,1024}$/,

        product_unit: /^[a-zA-Z0-9(),/\-_/ ]{0,10}$/,

        product_quantity: /^\d+.?[\d]+$/,
        
        unit_cost: /^\d+.?[\d]+$/,
        
        price: /^\d+.?[\d]+$/,
        
        least_critical_amount: /^\d+.?[\d]+$/,
        
        high_amount: /^\d+.?[\d]+$/,
        
        expire_date: /.*/,

        category: /.*/,

        brand: /.*/
    }


    function fieldChangeHandler(event){
        const target = event.target
        const {name, value} = target

        
        setFormData(prevData => {
            
            if(reg[name].test(value)){
                target.style.color = "red"
            }
            else{
                target.style.color = "black"
            }
            
            return {
                ...prevData,
                [name]: value
            } 
        })
        
    }


    function addInventory(event) {
        setChange(prev => !prev)
        setFormData(prevFormData => {
            let obj
            for (let key in prevFormData){
                obj = {
                    ...obj, 
                    [key]: ""
                }
            }
            return obj
        })

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
                            placeholder="name" 
                            onChange={fieldChangeHandler}
                            value={formData.product_name}
                            name="product_name"/>
                    </div>

                    <div className="lbl">
                        <label>Description</label>
                        <textarea 
                            className="desc-textarea"
                            placeholder="description" 
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
                            placeholder="unit" 
                            onChange={fieldChangeHandler}
                            value={formData.product_unit}
                            name="product_unit"/>
                    </div>

                    <div className="lbl">
                        <label>Quantity</label>
                        <input 
                            type="text" 
                            placeholder="quantity" 
                            onChange={fieldChangeHandler}
                            value={formData.product_quantity}
                            name="product_quantity"/>
                    </div>

                    <div className="lbl">
                        <label>Unit-Cost</label>
                        <input 
                            type="text" 
                            placeholder="unit cost" 
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
                            placeholder="price" 
                            onChange={fieldChangeHandler}
                            value={formData.price}
                            name="price"/>
                    </div>

                    <div className="lbl">
                        <label>Least Critical Amount</label>
                        <input 
                            type="text" 
                            placeholder="least critical amount" 
                            onChange={fieldChangeHandler}
                            value={formData.least_critical_amount}
                            name="least_critical_amount"/>
                    </div>

                    <div className="lbl">
                        <label>High Amount</label>
                        <input 
                            type="text" 
                            placeholder="high amount" 
                            onChange={fieldChangeHandler}
                            value={formData.high_amount}
                            name="high_amount"/>
                    </div>
                </div>

                <div className="lbl--group">
                    <div className="lbl">
                        <label>Category</label>
                        <select 
                                id="category" 
                                name="category"
                                value={formData.category}
                                onChange={fieldChangeHandler}>
                            <option value="1">other</option>
                            {categoryItems.map(cat_item => {
                                if(!cat_item.name === "other")
                                return(
                                    <option key={cat_item.id} value={cat_item.id}>{cat_item.name}</option>
                                )
                            })}
                        </select>
                        
                    </div>

                    <div className="lbl">
                        <label>Brand</label>
                        <select 
                                id="brand" 
                                name="brand"
                                value={formData.brand}
                                onChange={fieldChangeHandler}>
                            <option value="1">other</option>
                            {brandItems.map(brand_item => {
                                if(!brand_item.name === "other")
                                return(
                                    <option key={brand_item.id} value={brand_item.id}>{brand_item.name}</option>
                                )
                            })}
                        </select>
                        
                    </div>
                    
                    <div className="lbl">
                        <label>Expire Date</label>
                        <input 
                            type="date" 
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
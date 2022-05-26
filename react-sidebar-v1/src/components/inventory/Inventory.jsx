import React from "react"
import "./inventory.css"

export default function Inventory() {

    const [data, setData] = React.useState({
        id: "",
        name: "",
        desc: "",
        unit: "",
        quantity: "",
        unit_cost: "",
        price: "",
        critical: "",
        high: "",
        created: "",
        updated: "",
        expire: "",
        category: "",
        brand: "",
        by: ""
    });


    React.useEffect(() => {
        fetch("http://localhost:3000/erpdatabase/inventory/2")
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


    return(
        <div className="inventory">

            <div className="add">
                <div className="lbl">
                    <label>ID</label>
                    <input 
                        type="text" 
                        placeholder="add" 
                        onChange={fieldChangeHandler}
                        value={data.id}
                        name="id"/>
                </div>

                <div className="lbl">
                    <label>Name</label>
                    <input 
                        type="text" 
                        placeholder="add" 
                        onChange={fieldChangeHandler}
                        value={data.name}
                        name="name"/>
                </div>

                <div className="lbl">
                    <label>Description</label>
                    <input 
                        type="text" 
                        placeholder="add" 
                        onChange={fieldChangeHandler}
                        value={data.desc}
                        name="desc"/>
                </div>

                <div className="lbl">
                    <label>Unit</label>
                    <input 
                        type="text" 
                        placeholder="add" 
                        onChange={fieldChangeHandler}
                        value={data.unit}
                        name="unit"/>
                </div>

                <div className="lbl">
                    <label>Quantity</label>
                    <input 
                        type="text" 
                        placeholder="add" 
                        onChange={fieldChangeHandler}
                        value={data.quantity}
                        name="quantity"/>
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
                        value={data.critical}
                        name="critical"/>
                </div>

                <div className="lbl">
                    <label>High Amount</label>
                    <input 
                        type="text" 
                        placeholder="add" 
                        onChange={fieldChangeHandler}
                        value={data.high}
                        name="high"/>
                </div>

                <div className="lbl">
                    <label>Created At</label>
                    <input 
                        type="text" 
                        placeholder="add" 
                        onChange={fieldChangeHandler}
                        value={data.created}
                        name="created"/>
                </div>

                <div className="lbl">
                    <label>Updated At</label>
                    <input 
                        type="text" 
                        placeholder="add" 
                        onChange={fieldChangeHandler}
                        value={data.updated}
                        name="updated"/>
                </div>

                <div className="lbl">
                    <label>Expire Date</label>
                    <input 
                        type="text" 
                        placeholder="add" 
                        onChange={fieldChangeHandler}
                        value={data.expire}
                        name="expire"/>
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

                <button>Add</button>
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
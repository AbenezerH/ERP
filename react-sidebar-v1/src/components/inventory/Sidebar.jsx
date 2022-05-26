import React from "react"

export default function Sidebar() {

    return(
        <div className="sidebar">
            <div className="row">
                <label className="side-item">Human Resource</label>
                <label className="side-item">Inventory</label>
                <label className="side-item">Sales</label>
                <label className="side-item">Finance</label>
            </div>
        </div>
    );
}
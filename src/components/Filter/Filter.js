import React from "react";

export default (props) => {

return (<div>
       <label>Filter By Category:</label>
        <select className="form-control"
        onChange={props.onFilter}
        >
        <option value="">Select Category</option>
            { props.categories.map((c,i) => {
                return <option value={c}
                key={i}
                >{c}</option>
            })}

        </select>

    </div>
    )

}
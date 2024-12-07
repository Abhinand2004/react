import React from "react";

const BaseComponent=({data})=>{
    return(
<div>
    <h1>Datas</h1>
    <ul>
        {
            data.map((dt,index)=>(<li key={index}> {index}- {dt}</li>))
        }
    </ul>
</div>
    )
}

export default BaseComponent
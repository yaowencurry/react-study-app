import React from 'react';
import WidthFetch from "./widthFetch/WidthFetch";

const chengPin = WidthFetch('http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php')(props=>{
    return (
        <div>
            <p>{props.data.chengpinDetails[0].title}</p>
        </div>
    )
})

export default chengPin
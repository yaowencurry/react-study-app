import React from 'react';
import WidthFetch from "./widthFetch/WidthFetch";

const Banner = WidthFetch('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')(props=>{
    return (
        <div>
            <p>{props.data.banner[0].title}</p>
        </div>
    )
})

export default Banner
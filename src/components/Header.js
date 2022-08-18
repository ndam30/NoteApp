import React from "react";

const Header = ({handleDarkMode}) => {
    return ( <div className="header">
        <h1>NOTES APP</h1>
        <button onClick={()=> handleDarkMode((previousDarkMode) => !previousDarkMode)} className="save">Toggle mode</button>
    </div> );
}
 
export default Header;
import React from 'react';


const CustomLayout = (props) => {
    return(
        <div className="content">
            {props.children}
        </div>
    );
}

export default CustomLayout;
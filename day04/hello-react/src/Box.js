import './Box.css';

import React from 'react';

const Box = (props) => {
    console.log(props);
    const styles = { color: 'green', ...props.style };
    const dashedClass = props.dashed ? 'Dashed' : undefined
    console.log(dashedClass);
    const extraClasses = props.rounded ? 'Box-rounded' : undefined;
    console.log(extraClasses);
    let classes = `Box ${extraClasses} ${dashedClass}`;
    classes = `${classes} ${props.className}`; 
    return (
        <div className={classes} style={styles}>
        {props.children}
        </div>
    );
};

export default Box;
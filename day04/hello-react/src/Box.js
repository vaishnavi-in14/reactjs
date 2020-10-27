import './Box.css';

import React from 'react';
// import classnames from 'classnames';

const Box = (props) => {
    /* console.log(props); */
    const styles = { color: 'green', ...props.style };
   /*  const dashedClass = props.dashed ? 'Dashed' : undefined
    console.log(dashedClass);
    const extraClasses = props.rounded ? 'Box-rounded' : undefined;
    console.log(extraClasses);
    let classes = `Box ${extraClasses} ${dashedClass}`;
    classes = `${classes} ${props.className}`; */
    const extraClass = props.className;
    console.log(extraClass);
    //let classes = classnames('Box', {'Box-rounded': props.rounded, 'Dashed': props.dashed}, extraClass);
    var classNames = require('classnames');
    let classes = classNames('Box', {'Box-rounded': props.rounded, 'Dashed': props.dashed}, extraClass);
    console.log(classes); 
    return (
        <div className={classes} style={styles}>
        {props.children}
        </div>
    );
};

export default Box;
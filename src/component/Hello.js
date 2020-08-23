import React from 'react';

const Hello=()=>
{
    // return(
    //     <div className = "dummyClass">
    //         <h1>Hello Vivek</h1>
    //     </div>
    // ),
    return React.createElement('div', null, React.createElement('h1', null, 'Hello Vivek'))
}

export default Hello
/*import React, { useRef } from 'react'
import ChildComponent from './ChildComponent';

const ParentComponent=()=>{
    const childRef=useRef();
    const handleParentClick=()=>{
        console.log('parent button clicked')
        console.log(childRef.current);
    };
    childRef.current="HEllo"
    return(
        <div>
            <button onClick={handleParentClick}>Parent Button</button>
            <ChildComponent ref ={childRef}/>
        </div>
    );
};
export default ParentComponent;
*/

import React, { useRef } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const childFunctionRef = useRef();

  const storeChildFunction = (childFunction) => {
    childFunctionRef.current = childFunction;
  };

  const InvokeChildFunction = () => {
    if (childFunctionRef.current) {
      childFunctionRef.current();
    }
  };

  return (
    <div>
      <ChildComponent setChildFunction={storeChildFunction} />
      <button onClick={InvokeChildFunction}>Invoke Child Function</button>
    </div>
  );
};

export default ParentComponent;

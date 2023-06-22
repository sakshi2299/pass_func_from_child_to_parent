/*import React, { useRef } from 'react'

const ChildComponent=()=>{
    const childRef=useRef();
    const handleClick = ()=>{
        console.log("child button clicked")
    };
    return (
        <div>
            <button ref={childRef} onClick={handleClick}>Child Button</button>
        </div>
    );

};
export default ChildComponent;
*/
import React, { useEffect } from 'react';

const ChildComponent = ({ setChildFunction }) => {
  const childFunction = () => {
    console.log('Child function invoked!');
  };

  useEffect(() => {
    setChildFunction(childFunction);
  }, [setChildFunction]);

  return <div>Child Component</div>;
};

export default ChildComponent;

import React, { useState, useEffect } from 'react';  

function CustomCounter() {  
    const [count, setCount] = useState(0);  
    const incrementCount = () => setCount(count + 1);  
    useDocumentTitle(`You clicked ${count} times`);  
    // useEffect(() => {  
    //   document.title = `You clicked ${count} times`  
    // });  
    
    return (  
      <div>  
        <p>You clicked {count} times</p>  
        <button onClick={incrementCount}>Click me</button>  
      </div>  
    )  
  }  
  export default CustomCounter;  
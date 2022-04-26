 import React, {useEffect} from 'react'
 
 export default function Animate() {

    useEffect(() => {
        const container = document.querySelector('.container');
        console.log(container)
    })
   return (
     <div className="container" >
       <div className="heart"></div>
     </div>
   )
 }
 
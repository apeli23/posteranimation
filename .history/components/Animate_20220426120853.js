 import React, {useEffect} from 'react'
 
 export default function Animate() {

    useEffect(() => {
        const container = document.querySelector('.container');
        hearts.classList.add('heart');
        container.app
    }, [])
   return (
     <div className="container" >
       <div className="heart"></div>
     </div>
   )
 }
 
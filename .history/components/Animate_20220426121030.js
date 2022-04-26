 import React, {useEffect} from 'react'
 
 export default function Animate() {

    useEffect(() => {
        const container = document.querySelector('.container');
        
        for (var i = 1; i<=5; i++) {
            const hearts =document.createElement('div');
            hearts
        }
    }, [])
   return (
     <div className="container" >
       <div className="heart"></div>
     </div>
   )
 }
 
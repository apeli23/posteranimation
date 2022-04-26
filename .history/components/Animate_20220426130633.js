 import React, {useEffect} from 'react';

 const anime = require('animejs');
 
 export default function Animate() {
console.log(anime)
    useEffect(() => {
        const container = document.querySelector('.container');
        
        for (var i = 1; i<=50; i++) {
            const hearts =document.createElement('div');
            hearts.classList.add('heart')
            container.appendChild(hearts);
        }

        animeHearts()
    }, [])
    function animeHearts() {
        anime({
            targets: 'div',
            translateX: 250,
            rotate: '1turn',
            backgroundColor: '#FFF',
            duration: 800
          });
    }
   return (
     <div className="container" >
       <div className="heart"></div>
     </div>
   )
 }
 
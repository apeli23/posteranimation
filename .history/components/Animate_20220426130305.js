 import React, {useEffect} from 'react';

 const anime = require('animejs');
 
 export default function Animate() {

    useEffect(() => {
        const container = document.querySelector('.container');
        
        for (var i = 1; i<=50; i++) {
            const hearts =document.createElement('div');
            hearts.classList.add('heart')
            container.appendChild(hearts);
        }

        function animeHearts() {
            anime({
                targets: '.heart',
                translateX: function(x) { 
                    return anime.random(-700, 700);
                }
            })
        }
    }, [])
   return (
     <div className="container" >
       <div className="heart"></div>
     </div>
   )
 }
 
 import React, {useEffect} from 'react';

 import anime from 'animejs';
 
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
            targets: '.heart',
            translateX: function(x) { 
                return anime.random(-700, 700);
            },
            translateY: function(x) { 
                return anime.random(-500, 500);
            }, 
            rotate: 45
        })
    }
   return (
     <div className="container" >
       <div className="heart"></div>
     </div>
   )
 }
 
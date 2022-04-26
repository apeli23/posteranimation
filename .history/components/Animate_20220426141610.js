import React, { useEffect } from 'react';

import anime from 'animejs';

export default function Animate() {
    console.log(anime)
    useEffect(() => {
        const container = document.querySelector('.container');

        for (var i = 1; i <= 50; i++) {
            const hearts = document.createElement('div');
            hearts.classList.add('heart')
            container.appendChild(hearts);
        }

        animateHearts()
    }, [])
    function animateHearts() {
        anime({
            targets: '.heart',
            translateX: function (x) {
                return anime.random(-700, 700);
            },
            translateY: function (x) {
                return anime.random(-500, 500);
            },
            rotate: 45,
            scale: function () {
                return anime.random(1, 5)
            },
            easing: 'easeInOutBack',
            duration: 3000,
            delay: anime.stagger(10),
            complete: animateHearts,
        })
    }
    return (
        <>
            <div className="item">
<input type="file" />
            </div>
            <div className="item">
            <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label
            </div>
            <div className="container" >
                <div className="heart"></div>
            </div>
        </>
    )
}

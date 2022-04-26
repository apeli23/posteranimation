import React, { useEffect, useRef } from 'react';

import anime from 'animejs';

export default function Animate() {
    const inputRef = useRef(undefined);
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

    function uploadHandler() {

    }
    return (
        <>
            <div className="item">
                <input
                    type="file"
                    ref={inputRef}
                    onChange={uploadHandler}
                    style={{ display: "none" }}
                    multiple={false}
                />
            </div>
            <div className="item">
                <button onClick={() => {inputRef.curre}}>Caption</button>
            </div>
            <div className="container" >
                <div className="heart"></div>
            </div>
        </>
    )
}

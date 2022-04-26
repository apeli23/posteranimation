import React, { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import anime from 'animejs';

export default function Animate() {
    const inputRef = useRef(undefined);
    const [link, setLink] = useState('')
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

    function captionHandler() {
        html2canvas(document.getElementsByClassName("container")).
    }

    return (
        <>
            <div className="item">
                {link? <a href={link}>View Caption</a>: <h3>Click anywhere to save Caption</h3>}
            </div>
            <div className="container" onClick={captionHandler}>
                <div className="heart"></div>
            </div>
        </>
    )
}

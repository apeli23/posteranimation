import React, { Component, useState, useEffect } from 'react'

export default class Animate extends Component {
    
    constructor(props) {
        super(props);
        this.state ={
            imageSrc: ''
        }
    }
    // var x, y, speed, velocity, size, myImage, canvas, ctx

    readFile(file) {
        return new Promise(function (resolve, reject) {
            let fr = new FileReader();

            fr.onload = function () {
                resolve(fr.result);
            };

            fr.onerror = function () {
                reject(fr);
            };

            fr.readAsDataURL(file);
        });
    }

    handleFileInputChange = async (e) => {
        const files = e.target.files;
        if (!files.length) return;

        // Store promises in array
        for (let file of files) {
            await this.readFile(file).then((encoded_file) => {
                this.animationHandler(encoded_file);
            });
        }
    }
    animationHandler = async (picture) => {
        const myImage = document.createElement('img');
        myImage.src = picture

        myImage.addEventListener('load', function () {
            const canvas = document.getElementById('canvas1');
            const ctx = canvas.getContext('2d');
            canvas.width = 360
            canvas.height = 280

            ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
            console.log(ctx)

            // let particlesArray = [];
            // const numberOfParticles = 5000;
            // class Particle {
            //     constructor() {
            //         this.x = Math.random() * canvas.width;
            //         this.y = 0
            //         this.speed = 0;
            //         this.velocity = Math.random * 0.5;
            //         this.size = Math.random() * 1.5 + 1

            //     }
            //     update(){
            //         this.y += this.velocity;
            //         if (this.y >= canvas.height){
            //             this.y = 0;
            //             this.x = Math.randpm *canvas.width
            //         }
            //     }
            //     draw(){
            //         cxt.beginPath();
            //         ctx.fillStyle = 'white';
            //         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            //         ctx.fill();
            //     }
            // }
             
            // useEffect(() => {
            //         for(let i = 0; i < numberOfParticles; i++){
            //             particlesArray.push( new Particle);
            //         }
            // })

            // function animate(){
            //     ctx.globalAlpha = 0.05;
            //     ctx.fillStyle = 'rgb( 0, 0, 0)';
            //     ctx.fillRect(0, 0, canvas.width, canvas.height);
            //     for(let i = 0; i < particlesArray.length; i++){
            //         particlesArray[i].upgrades();
            //         particlesArray[i].draw()
            //     }
            //     requestAnimationFrame(animate)
            // }
        })

    }
    render() {
        return (
            <div className="container">
                <h2>animation workspace</h2>
                <div className="row">
                    <div className="column">
                        <input type="file" onChange={this.handleFileInputChange} />
                        <img id="img" src={this.state.imageSrc ? this.state.imageSrc : "ben.png"} />
                    </div>
                    <div className="column">
                        <canvas id="canvas1" />
                    </div>
                </div>
            </div>
        )
    }
}

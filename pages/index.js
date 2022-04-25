import { useEffect } from 'react';
import { useScreenshot } from 'use-react-screenshot'
import Animate from '../components/Animate';


export default function Home() {
  
  // const animationHandler = async (picture) => {
  //   myImage = document.createElement('img');
  //   myImage.src = picture

  //   canvas = document.getElementById('canvas1');
  //   ctx = canvas.getContext('2d');
  //   canvas.width = 360
  //   canvas.height = 280
  //   ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);

  //   let particlesArray = [];
  //   const numberOfParticles = 5000;

  //   x = Math.random() * canvas.width;
  //   y = 0
  //   speed = 0;
  //   velocity = Math.random * 0.5;
  //   size = Math.random() * 1.5 + 1

  //   await updateHandler(x, y).then(() => {
  //     ctx.beginPath();
  //   })

  // }

  // const updateHandler = (x, y, velocity) => {
  //   y += velocity;
  //   if (y >= canvas.height) {
  //     y = 0;
  //     x = Math.random() * canvas.width;
  //   }
  // }
  // useEffect(() => {
  //   for (let i = 0; i < numberOfParticles; i++){

  //   }

  // }, [])
  return (
    <div>
      <Animate />
    </div>
  )
}

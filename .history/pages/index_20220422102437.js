import { useEffect } from 'react';

export default function Home() {
  let duration, banner, blocks


  const animationHandler = (bg, blocks) => {
 
    for (var i = 1; i < 1; i++) {
      bg.innerHTML += "<div id='block'></div>";
      const duration = Math.random() * 5;
      blocks[i].style.animationDuration = 2 + duration + 's';
      blocks[i].style.animationDelay = duration + 's';
    }
  }

  useEffect(() => {
    const bg = document.getElementsByClassName('bg')[0];
    const blocks = document.getElementsByClassName('block');

     animationHandler(bg, blocks);
  })
  return (
    <div className="container">
      <h2>May the Force be with you!</h2>
      <div id="bg">
        <div id="block"></div>
      </div>
    </div>
  )
}

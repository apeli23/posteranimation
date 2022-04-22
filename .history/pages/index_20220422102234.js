import { useEffect } from 'react';

export default function Home() {
  let duration, banner, blocks


  const animationHandler = () => {
    const bg = document.getElementsByClassName('bg')[0];
    const blocks = document.getElementsByClassName('block');

    for (var i = 1; i < 400; i++) {
      bg.innerHTML += "<div class='block'></div>";
      const duration = Math.random() * 5;
      blocks[i].style.animationDuration = 2 + duration + 's';
      blocks[i].style.animationDelay = duration + 's';
    }
  }

  useEffect(() => {
    const bg = document.getElementsByClassName('bg')[0];
    const blocks = document.getElementsByClassName('block');

     animation
  })
  return (
    <div className="container">
      <h2>May the Force be with you!</h2>
      <div className="bg">
        <div className="block"></div>
      </div>
    </div>
  )
}

import { useEffect } from 'react';

export default function Home() {
 let duration, banner, blocks
 

  const animationHandler = () => {
    banner = document.getElementsByClassName('banner')[0];
    console.log(banner)
     blocks = document.getElementsByClassName('blocks')

    for(var i=1; i < 400; i++) {
      banner.innerHTML += "<div class='blocks'></div>"
       duration = Math.random() * 5;
      blocks[i].style.animationDuration = 2 + duration + 's';
    }
  }
  return (
    <div class="container">
        <h2>May the Force be with you!</h2>
        <div class="bg">
            <div class="block"></div>
        </div>
    </div>
  )
}

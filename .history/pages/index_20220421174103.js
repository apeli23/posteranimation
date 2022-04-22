import { useEffect } from 'react';

export default function Home() {
 let duration, banner, blocks
  useEffect(() => {
     
  })

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
    <section>
      <h2>animation workspace</h2>
      <div className="banner">
        <div className="blocks"></div>
      </div>
    </section>
  )
}

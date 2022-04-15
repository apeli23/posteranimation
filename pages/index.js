import { useEffect } from 'react';

export default function Home() {


  useEffect(() => {
    animate()
  }, [])


  const animate = () => {
    const banner = document.getElementsByClassName('banner')[0];
    const blocks = document.getElementsByClassName('blocks');
    console.log(blocks.length)

    for (var i = 1; i < 400; i++) {
      banner.innerHTML += "<div className='blocks'></div>";
      
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

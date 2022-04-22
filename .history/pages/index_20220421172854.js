import { useEffect } from 'react';

export default function Home() {
 
  useEffect(() => {
    const banner = document.getElementsByClassName('banner')[0];
    console.log(banner)
    const blocks = document.getElementsByClassName('blocks')

    for(var i=1; i < 400; i++) {
      banner.innerHTML += "<div class='blocks'></di"
    }
  })

  return (
    <section>
      <h2>animation workspace</h2>
      <div className="banner">
        <div className="blocks"></div>
      </div>
    </section>
  )
}

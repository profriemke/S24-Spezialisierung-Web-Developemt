'use client'
import Hallo from '@/components/Hallo'
import Link from 'next/link'
export default function Home() {
  const namen = ['Pi', 'Octopus', 'Fledder', 'Mondmann']


  return (
    <div>
      <Navi/>
      <h1>Meine Startseite</h1>
        <ul>
          <li><Link href="/notes">zu Notizen</Link></li>
          <li><Link href="/about">zu About</Link></li>
        </ul>
      Hallo OMM!
     { 
        namen.map((name)=>{ return (
            <Hallo name={name}/>
        )})
     }
      <Hallo name="Fritzi"/>
      <Hallo name="Lisa"/>
      

    </div>
  )

}

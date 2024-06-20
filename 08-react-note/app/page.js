'use client'
import Hallo from '@/components/Hallo'
import Navi from '@/components/Navi'
import Link from 'next/link'
export default function Home() {
  const namen = ['Pi', 'Octopus', 'Fledder', 'Mondmann']


  return (
    <div>
      <Navi page="home" />
      <h1>Meine Startseite</h1>

      Hallo OMM!
      {
        namen.map((name) => {
          return (
            <Hallo name={name} />
          )
        })
      }
      <Hallo name="Fritzi" />
      <Hallo name="Lisa" />


    </div>
  )

}

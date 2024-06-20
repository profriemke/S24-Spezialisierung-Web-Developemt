'use client'
import Link from 'next/link'
import Navi from '@/components/Navi'
export default function About() {

    return (
        <div>
            <Navi page="about"/>
            <h1>About</h1>
            me.
            <Link href="/">zur Startseite</Link>
        </div>

    )
}
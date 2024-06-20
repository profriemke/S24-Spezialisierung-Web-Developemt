import Link from 'next/link'
export default function Navi(props) {
    return (
        <ul className='flex '>
            <li className={props.page == 'home' ?
                'bg-red-300 hover:bg-red-400  flex-1 p-2 text-white'
                :
                'bg-red-500 hover:bg-red-400  flex-1 p-2 text-white'} >
                <Link href="/">Home</Link></li>
            <li className={props.page == 'notes' ? 'bg-red-300 hover:bg-red-400  flex-1 p-2 text-white' : 'bg-red-500 hover:bg-red-400  flex-1 p-2 text-white'} ><Link href="/notes">Notizen</Link></li>
            <li className={props.page == 'about' ? 'bg-red-300 hover:bg-red-400  flex-1 p-2 text-white' : 'bg-red-500 hover:bg-red-400  flex-1 p-2 text-white'} ><Link href="/about">About</Link></li>
        </ul >

    )
}
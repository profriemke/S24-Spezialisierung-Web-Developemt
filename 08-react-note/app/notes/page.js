'use client'
import Navi from "@/components/Navi"
export default function Notes(){
    const notes = [
        {id:1, text: 'eine Notiz'},
        {id:2, text: 'zweite Notiz'}
    ]
    return(
        <div>
            <Navi page="notes"/>
            <h1>Meine Notizen</h1>
        </div>
    )
}
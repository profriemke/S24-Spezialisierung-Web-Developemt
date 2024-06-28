'use client'
import Navi from "@/components/Navi"
import Note from "@/components/Note"
import AddNote from "@/components/AddNote"

export default function Notes() {


    const notes = [
        { id: 1, text: 'eine Notiz' },
        { id: 2, text: 'zweite Notiz' },
        { id: 3, text: 'dritte Notiz' }
    ]
    const newNote = (note) => {
        notes.push(note)

    }
    return (
        <div>
            <Navi page="notes" />
            <h1>Meine Notizen</h1>
            <div className="flex">
                {
                    notes.map((note) => {
                        return (
                            <Note id={note.id} text={note.text} />
                        )
                    })
                }
            </div>
            <AddNote newnote={newNote} />
        </div>
    )
}
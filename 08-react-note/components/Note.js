'use client'
export default function Note(props) {
    return (
        <div className="w-64 h-64 m-2 shadow-md p-4 bg-yellow-400 rounded-lg">
            {props.text}
        </div>

    )

}
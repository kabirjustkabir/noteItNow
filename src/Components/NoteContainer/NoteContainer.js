import React from 'react'
import Note from '../Note/Note'
import "./NoteContainer.css"
function NoteContainer(props) {
    
    const reverseArray = (arr)=>{
        const tempArr=[]
        for(let i= arr.length-1;i>=0;i--)
        {
            tempArr.push(arr[i])
        }
        return tempArr;
    }
    
    const notes = reverseArray(props.notes);

    
    return (

        <div className="note-container">
            <h2>Notes</h2>
            <div className="note-container_notes custom-scroll">
                {
                    notes?.length>0 ?
                    (notes.map((note)=>
                        (
                        <Note 
                        key = {note.id}
                        note={note}
                        deleteNote={props.deleteNote}
                        updateText={props.updateText}
                        />
                        )
                    )
                    ):(<h3>No Notes Present</h3>)
                }
            </div>
        </div>
    )
}

export default NoteContainer

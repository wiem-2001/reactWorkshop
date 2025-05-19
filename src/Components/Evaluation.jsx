import {useState} from 'react'

function Evaluation({initialNotes}) {
 const [notes, setNotes] = useState(initialNotes);
 const [newNote, setNewNote] = useState('');
    const deleteNote = (index) => {
        const newNotes = [...notes]; // Copie du tableau
        newNotes.splice(index, 1);   // Supprime 1 élément à la position index
        setNotes(newNotes);
    }
    const addNote = (newNote) => {
        if (newNote.trim() !== '' && newNote >= 0 && newNote <= 20) {
            setNotes([...notes, newNote]);
            setNewNote('');
        }
    };
  return (
    <div>
        <input type="number" placeholder="Enter note" value={newNote}
        onChange={(e) => setNewNote(e.target.value)}/>
        <button onClick={() => addNote(newNote)}>add new grade</button>
       <ul >
            {notes.map((item, index) => (
            <li key={index}>{item}
           <button onClick={() => deleteNote(index)}>Delete</button>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default Evaluation

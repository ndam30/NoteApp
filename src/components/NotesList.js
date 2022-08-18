import Notes from "./Notes";
import AddNotes  from "./AddNotes";

const NotesList = ({notes, handleAddNote, handleDeleteNote}) => {
    return ( 
        <div className="notelist">
            {notes.map(
                (note)=> 
                    <Notes id={note.id} text={note.text} date={note.date}
                    handleDeleteNote={handleDeleteNote } key={note.id}/>
                )
            }
            <AddNotes handleAddNote= {handleAddNote}/>
        </div>
     );
}
 
export default NotesList;
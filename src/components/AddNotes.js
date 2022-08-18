import { useState } from "react";

const AddNotes = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('');
    const characterLimit = 300;

    const handleChange = (event) =>{
        if(characterLimit - event.target.value.length >=0){
            setNoteText(event.target.value)
        }
       
    }
    const handleSaveClick =() =>{
        if(noteText.trim().length > 0){
            handleAddNote(noteText); 
            setNoteText('');
        }
       
    }

    return (  
        <div className="notes new">
            <textarea cols='10' rows='8' placeholder="Type to add your notes..." 
            onChange ={handleChange}
            value={noteText}
            ></textarea>
            <div className="note-footer">
                {/* ajust the text.... */}
                <small>{characterLimit - noteText.length} characters remaining</small> 
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
}
 
export default AddNotes;
<div className="notes new">
    <textarea cols='8' ></textarea>
</div>
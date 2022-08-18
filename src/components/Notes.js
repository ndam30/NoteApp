import {MdDeleteForever} from 'react-icons/md';

const Notes = ({id, text, date, handleDeleteNote}) => {
    return ( 
        <div className="notes" >
            <span className="">{text}</span>
            <div className="note-footer"> 
            <small>{date}</small>
            <MdDeleteForever className='delete-icon' size='1.3em' onClick={()=> handleDeleteNote(id)}></MdDeleteForever>
            </div>
        </div>
     );
}
 
export default Notes;
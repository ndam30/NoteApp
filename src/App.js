import NotesList from "./components/NotesList";
import { useState, useEffect } from "react";
import {nanoid} from 'nanoid';
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  
  const savedNotes = JSON.parse(localStorage.getItem('react-notes'));

  const [notes, setNotes] = useState(savedNotes);
  const [searchText, setSearchText]= useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(()=>{
    console.log('updated...');
    
  }, [notes]);

  const addNote = (text) =>{
    const date =new Date()
    const newNode ={
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString
    }
    const newNodes =[...notes, newNode];
    localStorage.setItem('react-notes', JSON.stringify(newNodes));
    setNotes(newNodes);
  }

  const deleteNode =(id)=>{
    const newNodes = notes.filter((note)=> note.id !== id);
    localStorage.setItem('react-notes', JSON.stringify(newNodes));
    setNotes(newNodes);
  }

  return ( 
    <div className={`${darkMode && 'dark-mode'}`}>
    <div className="container">
      <Header handleDarkMode={setDarkMode}/>
      <Search handleSearchNote={setSearchText}/>
      <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))}
       handleAddNote={addNote} 
       handleDeleteNote ={deleteNode}/>
    </div>
    </div>
   );
}
 
export default App;
import React, {useState} from 'react';
import './App.css';
import Member from './components/Member';
import MemberForm from './components/MemberForm';
import ReactDOM from "react-dom";

function App() {
  
  const [members, setMembers] = useState([]);
  
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      position: member.position,
      email: member.email
    }
    setMembers([...members,newMember])
  }



  return (
    <div className="App">
      <h1>Add New Member</h1>
      <MemberForm addNewMember={addNewMember} /> 
      <h1>Team Members</h1>
      <Member members={members} />
    </div>
  );
}

export default App;


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
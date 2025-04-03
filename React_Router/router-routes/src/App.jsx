import {BrowserRouter as Router, Route, Routes } from 'react-router';

//Components
import PersonalInformation from './pages/Card.jsx';
import Nav from './components/Nav.jsx';
import Input from './pages/input.jsx';
import ToDoList from './pages/To-Do-List.jsx';
import Components from './pages/20_Componets.jsx';

function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<PersonalInformation Name= {"Imanol Ramírez"}
      Occupation={"Student"}
      Description={"I am guy who fell in love with computer's world. I Study at Ricaldone ITR, I'm 18 years old, i like cars and girls."}/>} />      
        <Route path="/input" element={<Input />} />
        <Route path="/to-do-list" element={<ToDoList />} />
        <Route path="/20_components" element={<Components />} />
      </Routes>
    </Router>
  )
}

export default App

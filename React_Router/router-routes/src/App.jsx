import {BrowserRouter as Router, Route, Routes } from 'react-router';
import './App.css'

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
        <Route path="/" element={<PersonalInformation />} />
        <Route path="/input" element={<Input />} />
        <Route path="/to-do-list" element={<ToDoList />} />
        <Route path="/20_components" element={<Components />} />
      </Routes>
    </Router>
  )
}

export default App

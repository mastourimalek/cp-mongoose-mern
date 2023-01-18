
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Add from './Pages/Add';
import Edit from './Pages/Edit';
import Error from './Pages/Error';
import Home from './Pages/Home';
import User from './Pages/User';


function App() {
  return (
    <div className="App">
<NavBar/>
<h1>MERN APP</h1>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/users' element={<User/>}/>
  <Route path='/Add' element={<Add/>}/>
  <Route path='/edit/:_id' element={<Edit/>}/>
  <Route path='/*' element={<Error/>}/>
</Routes>
    </div>
  );
}

export default App;

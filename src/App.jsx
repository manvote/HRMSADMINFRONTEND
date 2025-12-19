import Navbar from './components/navbar'
import Employees from './pages/employees'
import SearchBar from './components/searchbar';

//Navigation
import ViewEmployee from './navigation/viewEmployee';
import AddEmployee from './navigation/AddEmployee';
import EditEmployee from './navigation/EditEmployee';
import Offboarding from './navigation/Offboarding';


import './App.css'

//Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//React Router imports
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <div className="App">
        <div>
          <Navbar />
        </div>
        <div>
          <SearchBar />
          <RouterApp />
        </div>
      </div>

    </>
  )
}

function RouterApp() {
  return (
    <Routes>
      <Route path="/employee" element={<Employees />} />
      <Route path="/viewEmployee/:id" element={<ViewEmployee />} />
      <Route path="/addEmployee" element={<AddEmployee />} />
      <Route path="/editEmployee/:id" element={<EditEmployee />} />
      <Route path="/offboarding/:id" element={<Offboarding />} />
    </Routes>
  )
}

export default App

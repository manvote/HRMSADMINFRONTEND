

import Employees from './pages/employees'
import MainLayout from './MainLayout';

//Navigation
import ViewEmployee from './navigation/viewEmployee';
import AddEmployee from './navigation/AddEmployee';
import EditEmployee from './navigation/EditEmployee';
import Offboarding from './navigation/Offboarding';
import ConfirmPassword from './auth/ConfirmPassword';
import Login from './auth/Login';

// import './index.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';

function App() {
  return (
    <>


      <div className="App">
        {/* <div>
        <Navbar />
      </div>
      <div>
        <SearchBar />
        <Routes>
          <Route path="/employee" element={<Employees />} />
          <Route path="/viewEmployee/:id" element={<ViewEmployee />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/editEmployee/:id" element={<EditEmployee />} />
          <Route path="/offboarding/:id" element={<Offboarding />} />
        </Routes>
      </div> */}
      </div>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/confirmPassword" element={<ConfirmPassword />} />

        <Route element={<MainLayout />}>
          <Route path="/employee" element={<Employees />} />
          <Route path="/viewEmployee/:id" element={<ViewEmployee />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/editEmployee/:id" element={<EditEmployee />} />
          <Route path="/offboarding/:id" element={<Offboarding />} />
        </Route>

      </Routes>
      
    </>
  );
}

export default App;

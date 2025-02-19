import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar';
import Dropdown from './components/DropdownComponent/Dropdown/Dropdown';
import Dashboard from './pages/dashboard';
import Navbarmobileview from './components/navbar-mobileview';
import Weather from './pages/Weather/weather';
import WeatherForecast from './pages/Weather/weatherdailyforecast';
import Soil from './pages/SoilMoisture/soil';
import Login from './pages/Login-Page/loginpage';
import Farms from './pages/Home-Page/homepage';
import LogsTable from './pages/Log-page/logpage';
import Register from './pages/Signuppage/Register';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import AddEmployeeForm from './pages/Employee-Management/createemployee';
import EditEmployee from './pages/Employee-Management/updateemployee';
import Employee from './pages/Employee-Management/employee';
import Equipment from './pages/Equipment-Managemnet/equipment';
import CreateEquipmentForm from './pages/Equipment-Managemnet/createequipment';
import UpdateEquipment from './pages/Equipment-Managemnet/updateequipment';
import Cropmanagement from './pages/Crop-Management/cropmanagement';
import UpdateTask from './pages/Crop-Management/updatecroptask';
import AddCropTask from './pages/Crop-Management/createcroptask';
import LandManagement from './pages/Land-Management/land-management';
import FarmingComponent from './components/mapcomponent/slideA';
import ResetPassword from './pages/Forget-Password/forget-password';
import UpdatePassword from './pages/Forget-Password/reset-passwordpage';
import Myaccount from './pages/myaccount/myacount';
import Alerts from './pages/Alerts/alerts';
import { AuthProvider } from './context/authContext';
import PrivateRoute from './components/privateRoute'; 
import Setting from "./pages/Setting/setting";

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />
        <Routes>
          {/* Public routes */}
          <Route path='/' element={<Login />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
          <Route path='/updatepasswordpage' element={<UpdatePassword />} />
          <Route path='/register' element={<Register />} />

          {/* Protected routes */}
          <Route element={<PrivateRoute />}>
            <Route path='/homepage' element={<Farms />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/logs' element={<LogsTable />} />
            <Route path='/weather' element={<Weather />} />
            <Route path='/employee' element={<Employee />} />
            <Route path='/equipment' element={<Equipment />} />
            <Route path='/createequipment' element={<CreateEquipmentForm />} />
            <Route path='/createemployee' element={<AddEmployeeForm />} />
            <Route path='/cropmanagement' element={<Cropmanagement />} />
            <Route path='/updateequipment/:id' element={<UpdateEquipment />} />
            <Route path='/editemployee/:id' element={<EditEmployee />} />
            <Route path='/weatherforecast' element={<WeatherForecast />} />
            <Route path='/myaccount' element={<Myaccount />} />
            <Route path='/soil' element={<Soil />} />
            <Route path='/updatecroptask/:id' element={<UpdateTask />} />
            <Route path='/addcroptask' element={<AddCropTask />} />
            <Route path='/slideA' element={<FarmingComponent />} />
            <Route path='/landmanagement' element={<LandManagement />} />
            <Route path='/alerts' element={<Alerts />} />
            <Route path='/setting' element={<Setting/>}/>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

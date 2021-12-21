import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Protected from './components/Protected';
import { Route, Routes} from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import RequireAuth from './components/RequireAuth';
import Layout from './components/Layout';
import Users from './components/Users';
import AuthProvider from './providers/AuthProvider';
import Bulletin from './components/Bulletin';
import BulletinForm from './components/BulletinForm';
import MyBulletins from './components/MyBulletins';
import BulletinsSlice from './components/BulletinsSlice';

function App() {
  return (
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element= {<Home/>}/>
          <Route path="/login" element= {<Login/>}/>
          <Route path="/register" element= {<Register/>}/>
          <Route element={<RequireAuth />}>
              {/* protected routes go here */}
            <Route path="/protected" element={<Protected />} />
            <Route path = "/users" element={<Users/>}/>
            <Route path = "/api/bulletins/:id" element = {<Bulletin/>}/>
            <Route path = "/api/bulletins" element = {<MyBulletins/>}/>
            <Route path = "/api/bulletinsslice" element = {<BulletinsSlice/>}/>
            <Route path = "/api/bulletins/:id/edit" element = {<BulletinForm/>}/>
            <Route path = "/api/bulletins/new" element = {<BulletinForm/>}/>
          </Route>
        </Route >
      </Routes>
  );
}

export default App;

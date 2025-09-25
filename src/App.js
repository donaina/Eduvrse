// import logo from './logo.svg';
import './App.css';
import DashBoard from './DashBoard.tsx';
import Feed from './pages/DashBoardPages/Feed.tsx';
import Login from './pages/Authentication/Login.tsx'
import Register from './pages/Authentication/Register.tsx'
import Mycourse from './pages/DashBoardPages/MyCourse.tsx';
import Assessment from './pages/DashBoardPages/Assessment.tsx';
import Attendance from './pages/DashBoardPages/Attendance.tsx'; 
import Certification from './pages/DashBoardPages/Certification.tsx';
import Message from './pages/DashBoardPages/Message.tsx'; 
import Course from './pages/DashBoardPages/Course.tsx';
import Settings from './pages/DashBoardPages/Settings.tsx';
import Tools from './pages/DashBoardPages/Tools.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* Add other routes here */}
            <Route path="/" element={<DashBoard />}>
              <Route path="feed" index element={<Feed />} />
              <Route path="my-course" element={<Mycourse />} />
              <Route path="assessment" element={<Assessment />} />
              <Route path="attendance" element={<Attendance />} />
              <Route path="certification" element={<Certification />} />
              <Route path="messages" element={<Message />} />
              <Route path="course" element={<Course />} />
              <Route path="settings" element={<Settings />} />
              <Route path="tools" element={<Tools />} />
              <Route path="*" element={<Feed />} /> {/* Default route */}
              {/* Add the rest */}
            </Route>
          </Routes>
        </BrowserRouter>

      </div>
    </div>
  );
}

export default App;

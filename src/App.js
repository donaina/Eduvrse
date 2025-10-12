// import logo from './logo.svg';
import './App.css';
import DashBoard from './DashBoard.tsx';
import Feed from './pages/DashBoardPages/Feed.tsx';
import Login from './pages/Authentication/Login.tsx'
import Register from './pages/Authentication/Register.tsx'
import Mycourse from './pages/DashBoardPages/myCourse/MyCourse.tsx';
import Assessment from './pages/DashBoardPages/Assessment/Assessment.tsx';
import Attendance from './pages/DashBoardPages/Attendance/Attendance.tsx';
import Certification from './pages/DashBoardPages/Certification/Certification.tsx';
import Message from './pages/DashBoardPages/Message/Message.tsx';
import Course from './pages/DashBoardPages/Course.tsx';
import Settings from './pages/DashBoardPages/Settings/Settings.tsx';
import Tools from './pages/DashBoardPages/Tools.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewCourse from './pages/DashBoardPages/ViewCourse.tsx';
import AssessmentQuestions from './pages/DashBoardPages/Assessment/AssessmentQuestions.tsx';
// import AssessmentModal from './pages/DashBoardPages/Assessment/AssessmentModal.tsx';
import { AssessmentRoute } from './pages/DashBoardPages/Assessment/AssessmentRoute.tsx';
import CertificationBadges from './pages/DashBoardPages/Certification/CertificationBadges.tsx';
import CertififcationOutlet from './pages/DashBoardPages/Certification/CertififcationOutlet.tsx';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='view-course' element={<ViewCourse />} />
            {/* Add other routes here */}
            <Route path="/" element={<DashBoard />}>
              <Route path="feed" index element={<Feed />} />
              <Route path="my-course" element={<Mycourse />} >
                <Route path=':courseId' element={<ViewCourse />} />
              </Route>
              <Route path="/"  element={<AssessmentRoute />} >
                <Route path='/assessment' index element={<Assessment />} />
                <Route path='/assessmentQuestion' index element={<AssessmentQuestions />} />
               
              </Route>

              <Route path="attendance" element={<Attendance />} />
              <Route path="/" element={<CertififcationOutlet />} >
                <Route path='/certification' index element ={<Certification/>}/>
                <Route path='/certificationBadge' element ={<CertificationBadges/>}/>
              </Route>
              <Route path="messages" element={<Message />} />
              {/* <Route path="course" element={<Course />} /> */}
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

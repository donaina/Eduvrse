import './App.css';
import Dashboard from './components/dashboard/Dashboard.tsx';
// import './App.css';
// import DashBoard from './DashBoard.tsx';
import Feed from './components/feed/Feed.tsx';
import Login from './Authentication/Login.tsx'
import Register from './Authentication/Register.tsx'
import Mycourse from './components/myCourse/MyCourse.tsx';
import Editcourse from './components/myCourse/Editcourse.tsx';
import Analyzecourse from './components/myCourse/Analyzecourse.tsx';
import Assessment from './components/Assessment/Assessment.tsx';
// import Attendance from './pages/DashBoardPages/Attendance/Attendance.tsx';
// import Certification from './pages/DashBoardPages/Certification/Certification.tsx';
import Message from './components/Message/Message.tsx';
// import Course from './components/myCourse/MyCourse.tsx';
// import Settings from './pages/DashBoardPages/Settings/Settings.tsx';
// import Tools from './pages/DashBoardPages/Tools.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CourseOutlet from './components/myCourse/CourseOutlet.tsx';
// import ViewCourse from './pages/DashBoardPages/ViewCourse.tsx';
import AssessmentQuestions from './components/Assessment/AssessmentQuestions.tsx';
import { AssessmentRoute } from './components/Assessment/AssessmentRoute.tsx';
// import CertificationBadges from './pages/DashBoardPages/Certification/CertificationBadges.tsx';
// import CertififcationOutlet from './pages/DashBoardPages/Certification/CertififcationOutlet.tsx';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* Add other routes here */}
            <Route path="/" element={<Dashboard />}>
              <Route path="feed" index element={<Feed />} />
              <Route path="/" element={<CourseOutlet />} >
                <Route path='/course' index element={<Mycourse />} />
                <Route path='/edit-course' element={<Editcourse />} />
                <Route path='/analysis' element={<Analyzecourse />} />
              </Route>
              <Route path="/"  element={<AssessmentRoute />} >
                <Route path='/assessment' index element={<Assessment />} />
                <Route path='/assessmentQuestion' index element={<AssessmentQuestions />} />
               
              </Route>

              {/* <Route path="attendance" element={<Attendance />} /> */}
              {/* <Route path="/" element={<CertififcationOutlet />} >
                <Route path='/certification' index element ={<Certification/>}/>
                <Route path='/certificationBadge' element ={<CertificationBadges/>}/>
              </Route> */}
              <Route path="messages" element={<Message />} />
              {/* <Route path="course" element={<Course />} /> */}
              {/* <Route path="settings" element={<Settings />} /> */}
              {/* <Route path="tools" element={<Tools />} /> */}
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

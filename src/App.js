import React from 'react';
import {Navigate, Route,Routes,} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Login from './Page/Authenticate Page/Login/Login'
import PrivateRoute from './routes/PrivateRoute'
import { Breathing } from 'react-shimmer'

const ViewJob = React.lazy(() => import('./Components/Jobs/ViewJob'));
const Home =React.lazy(() => import('./Page/Home/Home'));
const StudentList =React.lazy(() => import('./Page/Students/StudentList'));
const HrsList =React.lazy(() => import('./Page/hrs/HrsList')); 
const JobView =React.lazy(() => import('./Components/Jobs/JobView')); 
// const EditProfile =React.lazy(() => import('./Components/patients/EditProfile'));
// const DoctorEditModal =React.lazy(() => import('./Components/doctors/DoctorEditModal')); 


function App() {
  return (
    <>
        < Navbar />
        <Routes>
               <Route path='/dashboard' element={<React.Suspense fallback={<><Breathing width={1200} height={1000} /></>}>
                      <PrivateRoute>
                          <Home />
                      </PrivateRoute>
              </React.Suspense>}/>
             <Route path='/students' element={<React.Suspense fallback={<><Breathing width={1200} height={1000} /></>}>
                      <PrivateRoute>
                          <StudentList />
                      </PrivateRoute>
              </React.Suspense>}/>
              <Route path='/hrslist' element={<React.Suspense fallback={<><Breathing width={1200} height={1000} /></>}>
                      <PrivateRoute>
                          <HrsList />
                      </PrivateRoute>
              </React.Suspense>}/>
              <Route path='/job-view' element={<React.Suspense fallback={<><Breathing width={1200} height={1000} /></>}>
                      <PrivateRoute>
                          <JobView />
                      </PrivateRoute>
              </React.Suspense>}/>
              <Route path='/view/:id' element={<React.Suspense fallback={<><Breathing width={1200} height={1000} /></>}>
                      <PrivateRoute>
                          <ViewJob />
                      </PrivateRoute>
              </React.Suspense>}/>
        <Route path='/login' element={ <Login />} />
        <Route path='*' element={ <Navigate to='/dashboard' />} />
        </Routes>
    </>
  );
}

export default App;

import React, { useState } from 'react'
import Users from './Components/Users'
import Discussions from './Components/Discussions'
import Events from './Components/Events'
import Guidelines from './Components/Guidelines'
import Contact from './Components/Contact'

const AdminDashboard = () => {
  const [activeComp, setActiveComp] = useState('user')
  // const comp ='jjb'
  const getComp = (comp) =>{
    switch (comp) {
      case 'users':    
        return <Users/>
      case 'discussions':    
        return <Discussions/>
      case 'events':    
        return <Events/>
      case 'guidelines':    
        return <Guidelines/>
      case 'contact':    
        return <Contact/>
      default:
        return <Users/>
    }
  }
  return (
    <>
      <div className="min-h-screen grid grid-cols-12 flex-grow">
        <div className="col-span-2 bg-black text-white">
          <div className="p-4 text-2xl font-bold">Admin Dashboard</div>
          <nav>
            <ul>
              {/* <li><Link to="/home" className="block py-2 px-4 hover:bg-gray-700">Home</Link></li> */}
              <li><div className="block py-2 px-4 hover:bg-gray-700 rounded-lg transition-colors duration-300" onClick={()=>{setActiveComp('users')}}>Users</div></li>
              <li><div className="block py-2 px-4 hover:bg-gray-700 rounded-lg transition-colors duration-300" onClick={()=>{setActiveComp('discussions')}}>Discussions</div></li>
              <li><div className="block py-2 px-4 hover:bg-gray-700 rounded-lg transition-colors duration-300" onClick={()=>{setActiveComp('events')}}>Events</div></li>
              <li><div className="block py-2 px-4 hover:bg-gray-700 rounded-lg transition-colors duration-300" onClick={()=>{setActiveComp('guidelines')}}>Guidelines</div></li>
              <li><div className="block py-2 px-4 hover:bg-gray-700 rounded-lg transition-colors duration-300" onClick={()=>{setActiveComp('contact')}}>Contact Us</div></li>
              {/* <li><Link to="/search" className="block py-2 px-4 hover:bg-gray-700">Search & Resources</Link></li>
        <li><Link to="/surveys" className="block py-2 px-4 hover:bg-gray-700">Surveys & Quizzes</Link></li> */}
            </ul>
          </nav>
        </div>
        <div className="col-span-10">
          {getComp(activeComp)}
        </div>
      </div>
    </>
  )
}

export default AdminDashboard
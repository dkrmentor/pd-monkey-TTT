import React from 'react'
import { BrowserRouter ,Routes , Route } from 'react-router-dom'
import Layout from './Layouts/Layout'
import Home from './Screens/Home/Home'
import Platform from './Screens/Platform/Platform'
import Plans from './Screens/Plans/Plans'
import OurWork from './Screens/OurWork/OurWork'



const App = () => {
  return (
    <div>
      <Layout>


        <BrowserRouter>
        <Routes>
{/* //header */}
        <Route path='/' element={ <Home /> } />
        <Route path='/platform' element={<Platform /> }/>
        <Route path='/plans' element={<Plans />} />
        <Route path='/ourWork' element={<OurWork />} />
{/* //footer */}

        </Routes>
        </BrowserRouter>

       
      </Layout>
    </div>
  )
}

export default App

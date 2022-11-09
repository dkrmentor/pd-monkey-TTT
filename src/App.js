import React from 'react'
import Layout from './Layouts/Layout'
import Home from './Screens/Home/Home'
// import { BrowserRouter ,Routes , Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Layout>
        <Home />
        {/* <BrowserRouter>
        <Routes>
        <Route path='/' element={Home} />
        <Route path='/platform' element={Platform} />
        <Route path='/' element={Services} />
        <Route path='/' element={Plans} />
        <Route path='/' element={OurWork} />
        <Route path='/' element={Resources} />

        </Routes>
        </BrowserRouter> */}
      </Layout>
    </div>
  )
}

export default App

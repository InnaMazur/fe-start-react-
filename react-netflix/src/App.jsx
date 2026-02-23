

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./components/Home.jsx"
import About from "./pages/About.jsx"
import PricePage from "./pages/PricePage.jsx"
import ContactsPage from "./pages/ContactsPage.jsx"


function App() {

  return (
    <>
     <Router>
    
    <Routes>
    <Route path='/' element={<Home></Home>}> </Route>
      <Route path='/about'element={<About></About>}></Route>
        <Route path='/price' element={<PricePage></PricePage>}> </Route>
        <Route path='/contact' element={<ContactsPage></ContactsPage>}></Route>
        </Routes>
     </Router> 
    
    </>
  )
}

export default App

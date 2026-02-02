
import Header from "./components/Header"
import Genre from "./components/Genre"
import Description from "./components/Description"
import Rating from "./components/Rating"
import Buttons from "./components/Buttons"
import Sliders from "./components/Sliders"

import Footer from "./components/Footer"

function App() {

  return (
    <>
     <Header></Header>
     <div className="small-wrapper">
    <Genre></Genre>
    <Description></Description>
    <Rating></Rating>
    <Buttons></Buttons>
    <Sliders></Sliders>
     </div>
     <Footer></Footer>
    </>
  )
}

export default App

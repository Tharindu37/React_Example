
import './App.css'
import BodyContent from './Components/BodyContent/BodyContent'
import HeaderContent from './Components/HeaderContent/HeaderContent'


function App() {

  return (
    <>
      <div id="wrapper">
        <HeaderContent/>
        <BodyContent>
          <h1>Home Page</h1>
        </BodyContent>
      </div>
    </>
  )
}

export default App

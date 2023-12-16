import HeaderContent from "./Components/HeaderContent/HeaderContent"
import BodyContent from './Components/BodyContent/BodyContent';
import logo from './assets/react.svg'

function App() {

  return (
    <>
      {/* <h1 className="main-wrap">Hello React APP</h1>
      <p>Tharindu Lakshan</p> */}
      <HeaderContent/>
      <BodyContent>
        <button>
          Click
        </button>
        <img src="vite.svg" alt="" />
        <img src={logo} alt="" />
      </BodyContent>
      <BodyContent>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus illo, suscipit repellat, et odit, officia animi nesciunt enim temporibus voluptatum non dolore praesentium nobis dolor aliquam mollitia ut quos ipsa.</p>
      </BodyContent>
    </>
  )
}

export default App

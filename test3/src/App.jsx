
import './App.css'

function App() {

  function hello1(e){
    console.log('hello 1',e)

  }

  const hello2=()=>{
    console.log('hello 2')
  }

  const hello3=(name)=>{
    console.log('hello 3 '+name)
  }

  const hello4=(name,e)=>{
    console.log('hello 4 '+name,e)
  }

  return (
    <>
<div className="wrapper">
  <button onClick={hello1}>Click 1</button>
</div>

<div className="wrapper">
  <button onClick={hello2}>Click 2</button>
</div>

<div className="wrapper">
  <button onClick={
    ()=>{
      hello3("tharindu")
    }
  }>Click 3</button>
</div>

<div className="wrapper">
  <button onClick={
    (e)=>{
      hello4("tharindu",e)
    }
  }>Click 4</button>
</div>
    </>
  )
}

export default App

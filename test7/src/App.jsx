
import './App.css'
import LoggedIn from './Components/LoggedIn';
import LoggedOut from './Components/LoggedOut';

function App() {

  const loggedin = false;
  const names=["hi"];
  const namesCount=names.length;
  return (
    <>
      {loggedin && <LoggedIn/>}
      {!loggedin && <LoggedOut/>}
      {/* {namesCount>0 && names.map((name)=>{
        return <h2>{name}</h2>
      })}
      {namesCount==0 && <p>None provided</p>} */}

      {namesCount>0 ? names.map((name)=>{
        return <h2>{name}</h2>
      }): <p>Not provided</p>}
    </>
  )
}

export default App

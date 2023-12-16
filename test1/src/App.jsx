function App() {
  // const count=10;
  // return (
  //   <>
  //   <div className="main">
  //   <h1 className="heading">Hi, Tharindu Lakshan</h1>
  //   <p>{10*5}% for JSX</p>
  //   <p>{count}% for JSX</p>
  //   <p>{count>50?"Greater":"Lesser"}</p>
  //   </div>
    
  //   </>
  // )
  const firstname="Tharindu"
  const middlename="Lakshan"
  const surname="Bandara"
  const age="30"
  const country="Sri Lanaka"
  const getFullName=(f,m,s)=>{
    return `${f} ${m} ${s}`
  }
  const arr=["Apple","Grapes","Oranges"];
  const lang=<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JS</li>
  <li>React</li>
</ul>

const pobj={
  name:'tharindu',
  age:24
}
  return(
    <>
    <div className="cont">
      <h1>Employee details</h1>
      <p>Full name: {getFullName(firstname,middlename,surname)}</p>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
      <p>{firstname} likes to eat {arr[0]}</p>
      <p>Fronted languages</p>
      {lang}
      <p>{pobj.name} is {pobj.age} years old</p>
    </div>
    </>
  )

}

export default App

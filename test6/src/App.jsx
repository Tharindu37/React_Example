
import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';

function App() {

  // let num1=0;
  let [num1,setnum1]= useState(0)
  let [count,setCount]=useState(0);
  const [clicks, setClicks]=useState(0);
  const [posts, setPosts]=useState([])
  const handleClick=()=>{
    // num1++;
    // console.log(num1)
    setnum1(++num1)
  }

  const increment=()=>{
    setCount(++count)
  }

  const decrement=()=>{
    setCount(--count)
  }

  

  // useEffect(()=>{
  //   console.log("hi")
  // },[num1])

  useEffect(()=>{
    document.title=`You clicked ${clicks} times`
  },[count]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((resp)=>resp.json())
    .then((blogPosts)=>setPosts(blogPosts))
    console.log('run')
  },[])

  return (
    <>
      <div id="wrapper">
        <button onClick={handleClick}>Click</button>
        <p>{num1}</p>

        <h3>Counter</h3>
        <button onClick={increment} style={{width:'50px',}}>+</button>
        <button onClick={decrement} style={{width:'50px',}}>-</button>
        <p>{count}</p>

        <p>You clicked {clicks} times</p>
        <button onClick={()=> setClicks(clicks+1)}>Click me</button>


        <ul className='prod_list'>
          {posts && posts.map((post)=> <li key={post.id}>{post.title}</li>)}
        </ul>
      </div>

    </>
  )
}

export default App

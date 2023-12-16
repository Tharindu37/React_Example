
import './App.css'

function App() {
  const styles_div={
    color:'blue',
    fontSize:'2rem'
  }

  return (
    <>
      <div id="wrapper">
        <p className='p1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum recusandae, praesentium, iusto sint voluptatem non accusantium doloribus commodi nisi enim labore nihil pariatur quis qui dolor, exercitationem laudantium aliquid? Molestiae?</p>
        <p style={{color:'green',fontSize:'2rem'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quasi sed commodi, veniam libero mollitia ut enim placeat dicta in error saepe minus porro deserunt qui repellendus cumque, optio ex?
        </p>
        <p style={styles_div}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus fugiat quia quam laboriosam voluptatibus, quo voluptate, eveniet asperiores, quaerat distinctio blanditiis adipisci assumenda corporis magni mollitia sint nobis neque ullam?</p>
      </div>
    </>
  )
}

export default App

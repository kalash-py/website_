import { useState } from "react"
import { X } from "lucide-react";

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])
  const [count, setCount] = useState(1);

  const submitHandler = (e) =>{
  e.preventDefault()

  const copyTask = [...task];

  copyTask.push({
    i: count,
    id: crypto.randomUUID(),
    title,
    details})


  setCount(count + 1);
  setTask(copyTask)

  setDetails('')
  setTitle('')
}
 const deleteNote = (id) =>{
    const copyTask = task.filter((item) => item.id !== id)
    setTask(copyTask)
  }

  return (
    <div className="div">
      <form onSubmit={(e)=>{
        submitHandler(e)

        
      }

      }
      className="form" 
      >
        <h1>Add Notes !!</h1>

        {/* Notes add krne wala */}
        <input
        type="text"
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        placeholder="Enter the Note Heading"
        className="input"
        />


        {/* Second wala input */}
        <input
        type="text"
        value={details}
        onChange={(e) =>{
          setDetails(e.target.value)
        }}
        placeholder="Enter the Details here"
        className="input"
        />
        <button className="addnote">
          Add Note
        </button>


      </form>
      <div className="output">
      <h1>Recent Notes</h1>

      <div className="cards-container">
        {task.map((elem,) => (
          <div key={elem.id} className="card">

          <button className="cross" 
          onClick={()=>{
            deleteNote(elem.id)
          }

          }
          >
            
          <X size={20} strokeWidth={2} />
          </button>


          <h1>{elem.i} </h1>    
          <h3>{elem.title}</h3>
          <p>{elem.details}</p>

          </div>
        ))}
      </div>
              
              

              

      </div>
            
  </div>
      



  )
}

export default App
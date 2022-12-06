import { useState, useEffect } from 'react'
import './App.css';

function App() {

  const [sweaters, setSweaters] = useState([])
  const [name, setName] = useState("")

  useEffect(() => {
    fetch('http://localhost:9292/sweaters')
    .then(res =>res.json())
    .then(data => setSweaters(data))
  }, [])

  const handleChangeName = e => setName(e.target.value)

  function handleSubmit(e) {
    e.preventDefault()

    fetch("http://localhost:9292/sweaters",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name })
    })
    .then( res => res.json() )
    .then( newSweater => setSweaters( [...sweaters, newSweater] ) )
  }

  return (
    <div className="App">

      <h1>Sweaters!</h1>

      {
        sweaters.map(s => <p>{s.name}</p>)
      }

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChangeName} value={name} />

        <input type="submit" value="Add new Sweater" />
      </form>

    </div>
  );
}

export default App;

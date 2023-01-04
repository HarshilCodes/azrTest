import React, {useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/API").then(
      res => res.json() 
    ).then(
      data => {
        setData(data)
        console.log(data)
      }

    )
  }, []) 

  return (
    <div>
      {/* {(typeOf data.Members === "undefined") ? (
        <p>Loading...</p> 
      ) : (
        data.Members.map((members, i) => (
          <p key={i}>{member}</p>
        ))
      )} */}
      {(typeof data.Members === 'undefined') ? (
        <p> "Loading..."</p>
      ) : 
      // (
      //   data.Members.map((members,i) =>(
      //     <p key={i}> {members} </p>
      //   ))
      // )
      <table>
        <tbody> 
      <tr>
        <th>Member</th>
        <th>Member again</th>
      </tr>
      {data.Members.map((val, key) => {
        return (
          <tr key={key}>
            <td>{val}</td>
            <td>{val}</td>
          </tr>
        )
      })}
      </tbody>
    </table>


      }


    </div>
  )
}

export default App

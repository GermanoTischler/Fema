import { useState } from "react";
import { api, server } from "./api/axios";

export default function App() {

  const [dataRequest, setDataRequest] = useState("")

  async function handleButton() {
    
    const resultAPI = await api.get("/")
    
    const user = resultAPI.data.results[0]
    
    const userNome = `${user.name.first} ${user.name.last}`

    const userEmail = `${user.email}`
    
    const resultSERVER = await server.post('user/', {
      name: userNome,
      email: userEmail
    })

    console.log(resultSERVER);

    setDataRequest(`${userNome}\n${userEmail}`)
  }

  return (
    <div className='bg-zinc-800 h-screen flex justify-center items-center'>
      <div className="w-[451px] h-[451px] bg-gray-100 flex justify-center items-center rounded-3xl space-y-5 flex-col hover:bg-blue-400">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <button onClick={handleButton}>Request</button>
        <p>--------------------------------------</p>
        <p>{dataRequest}</p>
      </div>
    </div>
  )
}

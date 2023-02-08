import Done from "@/components/Done";
import Todo from "@/components/Todo";
import { useState } from "react"

export default function Home() {

  const [nav, setNav] = useState(1);
  const [data, setData] = useState([]);

  const change = prop => {    
    setNav(parseInt(prop.target.value))   
  }

  function getNav() {
    switch (nav) {
      case 1: return <Todo  data={data} setData={setData} />;
      case 2: return <Done todos={data} setData={setData} />;        
    }
  }

  return (
    <div>
      <div className="flex shadow gap-5 pb-10 place-content-center bg-rose-900 m-1 rounded-lg">
        <h1 className="font-bold text-2xl text-white">Todo-List-App</h1>
      </div>
      <div className="flex place-content-center">
        <button onClick={change} name="1" value="1" className="mt-3 mr-4 shadow bg-indigo-500 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
          Todo
        </button>
        <button onClick={change} name="2" value="2" className="mt-3 mr-4 shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
          Done
        </button>
      </div>
      <div className="pb-6">
        {getNav()}
      </div>

    </div>
  )
}

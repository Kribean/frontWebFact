import { useEffect, useState } from "react";
import TodoItem from "../../components/Todo/TodoItem";
import Modal from "../../components/Modal/Modal";
import { Link } from "react-router-dom";

function Board() {
    const [tabTodos,setTabTodos]=useState([]);
    const [showModal, setShowModal] = useState(false);
const PUBLIC_API_URL = "http://localhost:3000";

useEffect(()=>{

    const token = localStorage.getItem("WebFactoryToken")

    fetch(`${PUBLIC_API_URL}/api/todo`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((data) => {
          if (data.ok) {
            return data.json();
          }
          throw new Error("Something went wrong");
        })
        .then((data)=>{
            setTabTodos(data)
        }
        ).catch((error)=>console.log(error))
},[])
    return (
<div className="flex flex-col w-full">
<Link to={"/"} className="btn btn-neutral w-[200px] m-5" >Accueil</Link>
{showModal && <Modal setShowModal={setShowModal} setTabTodos={setTabTodos}/>}
<div className="hero min-h-screen bg-base-200">
  <div className="flex w-full text-center p-[20px]">
    <div className="flex flex-col w-full ">
      <h1 className="text-5xl font-bold">Mes tâches</h1>
      <div className="flex flex-row w-full justify-end mr-5">
      <button className="btn btn-secondary w-[200px]" onClick={()=>{setShowModal(true)}}>Ajouter une todo</button>
      </div>
{
    tabTodos
    .filter((element)=>element.state==="pending")
    .map((element)=>{
return <TodoItem title={element.title}  state={element.state} id={element._id} key={element._id}/>
    })

}
{
    tabTodos
    .filter((element)=>element.state==="done")
    .map((element)=>{
return <TodoItem title={element.title} state={element.state} id={element._id} key={element._id}/>
})
    
}
    </div>
  </div>
</div>
</div>
    );
  }
  
  export default Board;
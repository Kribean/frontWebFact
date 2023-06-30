import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams,useNavigate } from "react-router-dom";
function Todo() {
  const navigate = useNavigate();
  const params = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [isChanged, setIsChanged] = useState(false);


  const validateData = ()=>{
    
    const token = localStorage.getItem("WebFactoryToken")
    fetch(`${PUBLIC_API_URL}/api/todo/${params.id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body:JSON.stringify({
      description:description
    })
  })
    .then((data) => { setIsChanged(false);console.log("Objet modifié")})
    .catch((error)=>console.log(error))
  };

  const modifyData = ()=>{
    setIsChanged(true)
  }

const deleteTodo = ()=>{
  const token = localStorage.getItem("WebFactoryToken")
  fetch(`${PUBLIC_API_URL}/api/todo/${params.id}`, {
  method: "DELETE",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  }
})
  .then((data) => { navigate("/board");console.log("todo supprimé")})
  .catch((error)=>console.log(error))
}

//change status of th todo by watching the value of the switch
  const changeStatus = (e)=>{
    if(e.target.checked)
    {
        setStatus("done")
    }else{
        setStatus("pending")
    }
    const token = localStorage.getItem("WebFactoryToken")
    fetch(`${PUBLIC_API_URL}/api/todo/${params.id}/state`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body:JSON.stringify({
      state:(e.target.checked?"done":"pending")
    })
  })
    .then((data) => {console.log("Objet modifié")})
    .catch((error)=>console.log(error))
  }

  const PUBLIC_API_URL = "http://localhost:3000";
  useEffect(() => {
    const token = localStorage.getItem("WebFactoryToken")
    fetch(`${PUBLIC_API_URL}/api/todo/${params.id}`, {
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
        setTitle(data.title);
        setDescription(data.description);
        setStatus(data.state);
    }
    ).catch((error)=>console.log(error))
},[])

  return (
    <div className="container mx-auto bg-base-200">
        <div className="flex w-full justify-start m-5">
        <Link to="/board" className="btn btn-neutral">Listes des tâches</Link>
        </div>
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <h1 className="text-5xl font-bold m-5">Tache: {title}</h1>
<div>
<p className="text-xl m-2">{status}</p>
          <input type="checkbox" checked={status === "done"} className="toggle toggle-success" onChange={changeStatus} />
</div>

          <textarea value={description} className="textarea w-full my-5" placeholder="Bio" onChange={(e)=>{setDescription(e.target.value)}} disabled={!isChanged}></textarea>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-end m-5">
            {isChanged ? (
              <button className="btn btn-success m-5" onClick={validateData}>Valider</button>
            ) : (
              <button className="btn btn-primary m-5" onClick={modifyData}>Modifier</button>
            )}
            <button onClick={()=>{deleteTodo()}} className="btn btn-error m-5">Supprimer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;

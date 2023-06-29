import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Todo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [isChanged, setIsChanged] = useState(false);

  const validateData = ()=>{
    setIsChanged(false)
  };

  const modifyData = ()=>{
    setIsChanged(true)
  }

  const changeStatus = (e)=>{
    if(e.target.checked)
    {
        setStatus("done")
    }else{
        setStatus("pending")
    }
    console.log(e.target.value,'llllll')
  }

  useEffect(() => {
    setTitle("ichi");
    setDescription("lsjflsjf sfglkqfsdg");
    setStatus("pending");
  }, []);

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
            <button className="btn btn-error m-5">Supprimer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;

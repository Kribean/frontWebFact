
import { useNavigate } from "react-router-dom";
function TodoItem(props) {
    const navigate = useNavigate();

    const goToItem =()=>{
        navigate(`/todo/${props.id}`)
    }
    return (
<div className="card w-96 bg-base-100 shadow-xl m-5 todo-item">
<div className={(props.state==="pending"?"alert-info":"alert-success")+ " alert "}>
  {props.status==="done"?<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  :
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  }
  <span>{props.state}</span>
</div>
  <div className="card-body">
    <h2 className="card-title truncate text-ellipsis">{props.title}</h2>
  </div>
<div className="flex flex-row justify-end item-center m-4">
<button onClick={()=>{goToItem()}} className="btn btn-info m-2">Accéder</button>
</div>
</div>
    );
  }
  
  export default TodoItem;
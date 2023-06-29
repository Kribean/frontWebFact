
function TodoItem(props) {

    return (
<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{props.title}</h2>
    <p>{props.description}</p>
  </div>
<div className="flex flex-row justify-end item-center m-4">
<button className="btn btn-info m-2">Accéder</button>
<button className="btn btn-error m-2">Supprimer</button>
</div>
</div>
    );
  }
  
  export default TodoItem;
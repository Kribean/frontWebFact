import TodoItem from "../../components/Todo/TodoItem";

function Board() {

    return (
<div className="hero min-h-screen bg-base-200">
  <div className="flex w-full text-center p-[20px]">
    <div className="flex flex-col w-full ">
      <h1 className="text-5xl font-bold">Mes tâches</h1>



<TodoItem title={"kjhsedkfjhk"} description={"akuhzdoaujf aiozejia dtgselrdgt rlmgkjsmpoekgtrmlsekg ùmrdokp erktùêkottg emrtkypmoektr eoerktyo "} status={"pending"}/>
<TodoItem title={"kjhsedkfjhk"} description={"akuhzdoaujf aiozejia dtgselrdgt rlmgkjsmpoekgtrmlsekg ùmrdokp erktùêkottg emrtkypmoektr eoerktyo "} status={"done"}/>


    </div>
  </div>
</div>
    );
  }
  
  export default Board;
import { useState } from "react";

function Modal(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const saveTodo = () => {
    if (title.length > 0) {
      props.setShowModal(false);
      const PUBLIC_API_URL = "https://app-webfactory-c43470404cd5.herokuapp.com";
      const token = localStorage.getItem("WebFactoryToken");
      fetch(`${PUBLIC_API_URL}/api/todo`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: title,
          description: description,
        }),
      })
        .then((data) => {
          if (data.ok) {
            return data.json();
          }
          throw new Error("Something went wrong");
        })
        .then((data) => {
          props.setTabTodos(data);
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full my-6 mx-auto max-w-3xl ">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Créer une todo</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => props.setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Titre</span>
                </label>
                <input
                  id="titleModal"
                  type="text"
                  placeholder="Rentrer le titre"
                  value={title}
                  onChange={handleChangeTitle}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">description</span>
                </label>
                <textarea
                  id="descriptionModal"
                  value={description}
                  onChange={handleChangeDescription}
                  placeholder="rentrer la description"
                  className="input input-bordered"
                ></textarea>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => props.setShowModal(false)}
              >
                Fermer
              </button>
              <button
                id="saveModal"
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {
                  saveTodo();
                }}
              >
                Enregistrer ma todo
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default Modal;

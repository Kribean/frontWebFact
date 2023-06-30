import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function LogIn() {
    const navigate = useNavigate();
    const [nickname,setNickname] = useState("");
    const [password, setPassword] = useState("");
    
    const handleChangeNickname = (e)=>{
        setNickname(e.target.value)
    };

    const handleChangePassword = (e)=>{
        setPassword(e.target.value)
    };
    const PUBLIC_API_URL = "http://localhost:3000"
    const createProfil = ()=>{
        fetch(`${PUBLIC_API_URL}/api/auth/login`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nickname: nickname,
              password:password
            }),
          })
          .then((data)=>{
            if (data.ok) {
                return data.json()
            }
            throw new Error("Something went wrong");
          })
          .then((data)=>{
            localStorage.setItem("WebFactoryToken",data.token);
            navigate("/board")
          })
        .catch((error)=>{console.log(error)})
    }
    
    return (
<>
<Link to={"/"} className="btn btn-neutral w-[200px] m-5" >Accueil</Link>
<div className="hero min-h-screen bg-base-200">

  <div className="hero-content flex-col lg:flex-row-reverse w-full">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Log In</h1>
      <p className="py-6">Veuillez rentrer vos identifiants.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Pseudo</span>
          </label>
          <input type="text" value={nickname} onChange={handleChangeNickname} placeholder="pseudo" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Mot de passe</span>
          </label>
          <input type="text" value={password} onChange={handleChangePassword} placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button onClick={()=>{createProfil()}} className="btn btn-primary">log in</button>
        </div>
      </div>
    </div>
  </div>
</div>
</>
    );
  }
  
  export default LogIn;
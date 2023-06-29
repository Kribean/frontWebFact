
function SignIn() {

    return (
<div className="hero min-h-screen w-full bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse w-full">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign In</h1>
      <p className="py-6">Veuillez rentrer vos identifiants.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Pseudo</span>
          </label>
          <input type="text" placeholder="pseudo" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Mot de passe</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">sign in</button>
        </div>
      </div>
    </div>
  </div>
</div>
    );
  }
  
  export default SignIn;
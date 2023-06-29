
import { Link } from "react-router-dom";

function HomePage() {

  return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Webfactory</h1>
      <p className="py-6">Bienvenue sur votre todo liste</p>
<div className="flex flex-col lg:flex-row justify-center item-center">
<Link to="/login" className="btn btn-primary m-5">Login</Link>
      <Link to="/signin" className="btn btn-success m-5">Sign in</Link>
</div>
    </div>
  </div>
</div>
  );
}

export default HomePage;
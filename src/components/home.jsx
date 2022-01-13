import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Cool Store</h1>
      <h3>Check our amazing catalog</h3>

     

      <Link className="btn bnt-lg btn-primary" to="/catalog">
        View Catalog
      </Link>
    </div>
  );
};
export default Home;

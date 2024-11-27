import { Link } from 'react-router-dom';
import './Index.css';

function Index() {
  const imageSrc = '/userimage.png';

  return (
    <>
      <nav className="index-nav">
        <div className="index-logo">
          <img src="" alt="LOGO" />
        </div>
        <div className="index-add">
          <Link to="/Add">
            <button>Add Employee</button>
          </Link>
        </div>
      </nav>
      <div className="index-card-container">
      <Link to="/details">
      <div className="index-card">
          <div className="index-image">
            <img src={imageSrc} alt="Photo" />
          </div>
          <div className="index-details">
            <h2>Name</h2>
            <h4>Designation</h4>
          </div>
        </div>
      </Link>
      </div>
    </>
  );
}

export default Index;

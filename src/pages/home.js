import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className="container-fluid">
            <h1>You are at the best place to learn <b>Coding!</b></h1>
            <br/>
            <h2>Select from the following you want to learn:</h2>
            <br/>
            <center>
            <Link to="/python/" className="btn btn-lg btn-info">Python</Link>
            <br/>
            <br/>
            <Link to="/cpp/" className="btn btn-lg btn-info">C/C++</Link>
            <br/>
            <br/>
            <Link to="/java/" className="btn btn-lg btn-info">Java</Link>
            <br/>
            <br/>
            <Link to="/go/" className="btn btn-lg btn-info">Go</Link>
            <br/>
            <br/>
            <h3>Website Under Construction</h3>
            </center>
        </div>
    );
  }

  export default Home;

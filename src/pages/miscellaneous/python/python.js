import { Link } from "react-router-dom";

function Python({company_name}) {
  return (
         <center>
             <h2>Please select from the following:</h2>
             <br/>
             <Link to="/python/video/" className="btn btn-lg btn-info">See a Free tutorial video!</Link>
             <br/>
             <br/>
             <Link to="/python/book/" className="btn btn-lg btn-info">Read a Free E-Book</Link>
             <br/>
             <br/>
             <Link to="/python/quiz/" className="btn btn-lg btn-info">Give a Free, Certified Quiz</Link>
             <br/>
             <br/>
         </center>
  );
}

export default Python;

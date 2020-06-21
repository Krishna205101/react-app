import React from 'react';
import './App.css';
import './bootstrap/css/bootstrap.min.css';
import profile from './images/images.png';
import data from './data.json';
// import Greet from './Greeting';
// import Counter from './Counter';
// import State from './StateConcept';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import resume from './resume';


function App() {
  return (
    <BrowserRouter>
      <Route exact path='/react-app' component={Home} />
      <Route exact path='/' component={Home} />
      <Route exact path='/resume' component={resume} />
    </BrowserRouter>

  );
  // {/* <h1>Welcome to chrome</h1>
  //     <h2>Let's start with react</h2>
  //     <Greet name="krishna"></Greet>
  //     <Counter></Counter>
  //     <State></State> */}

}

let Home = () => {
  let profiles = data.profile;
  return (
    <div className="row justify-content-center">
      {profiles.map((value,index) => (

        < div className="col-lg-4 col-md-4 col-sm-10 mt-5" key={index}>
          <div className="card" style={{ width: "18rem", fontStyle: "italic", boxShadow: "0px 8px 8px -8px #000" }}>
            <img src={profile} height="300" style={{ align: "center" }} />
            <div className="card-body text-center">
              <h1>{value.data.name}</h1>
              <div className="card-text">
                <h4>{value.data.role}</h4>
              </div>
              <a href={"tel" + value.phone}>{value.data.phone}</a><br />
              <a href={"mailto" + value.email}>{value.data.email}</a>
              <Link to={{ pathname: '/resume',data:{id:index}}} className="btn btn-primary">View Profile</Link>
            </div>
          </div>
        </div >))}

    </div>
  )
}

export default App;

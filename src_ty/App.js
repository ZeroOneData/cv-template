import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Skills from './components/pages/skills/Skills';
import Experiences from './components/pages/experiences/Experiences';
import Educations from './components/pages/educations/Educations';
// import Portfolios from './components/pages/portfolios/Portfolios';
import './App.css';
import Layout from './components/Layouts/Layout';
import Details from './components/pages/details/Details';
import Milestone from './components/pages/milestone/Milestone';

function App() {

  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/skills"  >
            <Layout heading='Skillset'>
              <Skills />
            </Layout>
          </Route>
          <Route path="/experiences"  >
            <Layout heading='Professional Experience'>
              <Experiences />
            </Layout>
          </Route>
          <Route path="/educations"  >
            <Layout heading='Education'>
              <Educations />
            </Layout>
          </Route>
          {/* <Route path="/portfolios"  >
            <Layout heading='Portfolio'>
              <Portfolios></Portfolios>
            </Layout>
          </Route> */}
          <Route path="/details"  >
            <Layout heading='University Degree'>
              <Details />
            </Layout>
          </Route>
          <Route path="/milestone"  >
            <Layout heading='Milestone Certification'>
              <Milestone />
            </Layout>
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;

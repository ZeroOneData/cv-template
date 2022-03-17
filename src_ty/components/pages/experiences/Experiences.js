import React from 'react';

export default function Experiences() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>EXPERIENCE</strong>
          </h6>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text">
                Sep
                <strong>2018</strong> - Present
                {/* <strong>2017</strong> */}
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>SENIOR WEB DEVELOPER / SYSTEMS ARCHITECT</strong>
                </h6>
                <p>
                •	Design, build and deploy a full stack web application from conception to current live production state.
                </p>
                <p>
                •	app allows authorized OSSA members to interface with an AI server – presenting screened results to end-user.
                </p>
                <p>
                •	Major stakeholders: Discovery Health, East London Eye Centre and OSSA ( the ophthalmological Society of South Africa)
                </p>
                <p>
                •	Tech stack:
                </p>
                <p>
                  	Backend API: Python’s Django and Django Rest Framework – currently live on IIS server
                  	Frontend: ReactJs and React Material-ui – currently live on Heroku server.    
                </p>
              </blockquote>
            </div>
          </div>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text">
                Oct
                <strong>2016</strong> - Present
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>SENIOR ELECTRONICS TECHNICIAN</strong>
                </h6>
                <p>
                •	Senior Electronics technician specializing in installation, maintenance and design of medium to large scale enterprise-level security equipment (CCTV, Access Control, Alarms, Wireless Technologies)
                </p>
                <p>
                •	Notable clients: ABSA Bank, Standard Bank, FNB Bank, ZF Lemforder, Buffalo City Metro Municipality.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Navbar from './Navbar';
import Portfolio from './Portfolio';
import Profile from './Profile';
import Skills from './Skills';


export default function Home () {

    return (
        <section>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    <div className='col s12 m4 l3'>
                        <Profile />
                    </div>
                    <div className='col s12 m8 l9'>
                        <About />
                        <Skills />
                        <Experience />
                        <Education />
                        <Portfolio />
                    </div>

                </div>
            </div>
        </section>
    )
}
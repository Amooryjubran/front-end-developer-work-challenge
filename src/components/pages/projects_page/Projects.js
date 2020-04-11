import React from 'react';
import './projects.css';
import Popular from './Popular';

const Projects = () => (

            <div class="container" id="project-container">
                <div class="row" id="project-row-top" >
                    <div class="col" id="projects-top-left">
                        Projects
                    </div>
                    <div class="col" id="projects-top-right">
                    <i class="far fa-plus-square" style={{marginRight: '20px'}}></i>
                        Create Your First Project
                    </div>
                </div>
                <hr className="projects-hr"/>
                <div class="row" id="projects-row" >
                    <div class="col" id="projects-mid-left" >
                        <div className="my-projects">
                            My Projects
                        </div> 
                    </div>
                    
                    <div class="col" id="projects-mid-right" >
                        <div className="invited">
                            Invited Projects
                        </div>
                    </div>
                    
                </div>
                {/* <div className="projects-bottom">
                <h1 className="projects-bottom-text">There are currently no projects available</h1>
                </div> */}
                <Popular />
            </div>
);

export default Projects;
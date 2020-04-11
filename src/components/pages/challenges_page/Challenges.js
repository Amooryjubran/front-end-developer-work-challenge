import React from 'react';
import {ChallengeList} from './ChallengeData';
import {Link} from 'react-router-dom';


const Challenges = (props) => {

    
    let challenges = ChallengeList.map((challenge) =>{
        return (
            <div className="actor-container">
                <Link to={`/actors/${challenge.url}`} >
                    <div className="actor-image" style={{ backgroundImage:"url(" + challenge.img_src + ")"  }} >

                    </div>
                </Link>
                
                <h3 className="challenge-name"><span className="challenge-span">{challenge.name}</span></h3>
            </div>
        );
    });
    return(

        
        <div className="main-content"> 
            <div><Link className="back" to="/" >Back</Link></div>
                <h2>{props.title}</h2>
                <div className="container" id="container-challenge">
                {challenges}
                
            </div>
        </div>
        )
    
}


export default Challenges;


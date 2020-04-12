import React from 'react'
import {Link} from 'react-router-dom'


const Challenge = (props) => {

    
    return(

        
        <div className="main-content">
            <div><Link className="back" to="/labs">Back</Link></div>
            <h2>{props.id}</h2>
            <div className="container" id="container-challenge">
                <div className="challenge-profile-image" style={{ backgroundImage: "url(" + props.image + ")" , marginBottom: '30px'}}></div>
                <h2 style={{color: 'white', }}> <span style={{backgroundColor: 'lightgreen'}} >{props.name}</span> </h2>
                <p>{props.details}</p>
            </div>
            <div style={{textAlign: 'center', color: '#515966',}} className="fonts">
                <i style={{marginRight: '20px'}} class="fas fa-user-friends">26</i>
                <i style={{marginRight: '20px'}} class="far fa-clock">10:20AM</i>
                <i style={{marginRight: '20px'}} class="fas fa-unlock-alt">ALL</i>
            </div>
        </div>
        )
    
}


export default Challenge;
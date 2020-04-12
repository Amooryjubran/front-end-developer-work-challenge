import React from 'react';
import {Link} from 'react-router-dom';
const ExploreTop = () => (
  <>
    <div className="explore-frst">
      <h1 className="explore-text">EXPLORE</h1>
        <div className="explore-btn">
          <button className="exlore-buttons" style={{backgroundColor: 'whitesmoke', color: 'lightgreen'}}>Explore</button>
          <Link to='/labs'><button className="exlore-buttons">Challenges</button></Link>
          <Link to='/projects'><button className="exlore-buttons">Projects</button></Link>
        </div>
    </div>
    <hr style={{width: 'center' , marginLeft: '20px', marginRight: '20px'}}/>
    </>
)

  export default ExploreTop;

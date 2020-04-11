import React from 'react';
import {ChallengeList} from './ChallengeData';
import { Route } from 'react-router-dom';
import Challenge from './Challenge';
import './challenge.css';
import Challenges from './Challenges'

const ChallengeContainer = (props) =>  {
    let actrosUrl = ChallengeList.map((challenge) => {
        return (
            <Route path={`/actors/${challenge.url}`} render={() => <Challenge image={challenge.profile_img} name={challenge.name} details={challenge.description}  />} />
        )
    });
    return (
        <>
            <Route exact path="/actors" render={() => <Challenges title="LABS" />} />
            {actrosUrl}
        </>
    )
};

export default ChallengeContainer;
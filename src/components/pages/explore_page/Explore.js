import React, { Component } from 'react';
import './explore.css';
import ExploreTop from './Explore-top';
import Directory from './Directory';
import ExploreNumbers from './ExploreNumbers';


export default class Explore extends Component {
    render() {
        return (
            <div className="explore-container">
                <div className="explore-full">
                        <ExploreTop/>
                        <Directory />
                        <ExploreNumbers />
                        
                </div>
                
            </div>
        )
    }
}

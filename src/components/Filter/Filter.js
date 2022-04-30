import React from "react";
import "../Filter/Filter.css"
let Filter = (props) => {
    return (
        <div className="filters">
            <b className="filters" >Filters</b>
            <h5 className="clearAll filters" onClick={props.handleClear} >clear All</h5>
            <h3 className="year filters">Launch Year</h3>
            <div className="years filters">
            <div className="left filters">
            <button className="left-btn " onClick={props.handleYearChange}>2006</button>
            <button className="left-btn" onClick={props.handleYearChange}>2008</button>
            <button className="left-btn" onClick={props.handleYearChange}>2010</button>
            <button className="left-btn" onClick={props.handleYearChange}>2012</button>
            <button className="left-btn" onClick={props.handleYearChange}>2014</button>
            <button className="left-btn" onClick={props.handleYearChange}>2016</button>
            <button className="left-btn" onClick={props.handleYearChange}>2018</button>
            <button className="left-btn" onClick={props.handleYearChange}>2020</button>
            </div>
            <div className="right filters">
            <button className="right-btn"  onClick={props.handleYearChange}>2007</button>
            <button className="right-btn"  onClick={props.handleYearChange}>2009</button>
            <button className="right-btn"  onClick={props.handleYearChange}>2011</button>
            <button className="right-btn"  onClick={props.handleYearChange}>2013</button>
            <button className="right-btn"  onClick={props.handleYearChange}>2015</button>
            <button className="right-btn"  onClick={props.handleYearChange}>2017</button>
            <button className="right-btn"  onClick={props.handleYearChange}>2019</button>
            </div>
            </div>
            <h3 className="launching filters">Successful Launch</h3>
            <div className="filters launch-btn">
            <button className="launching-btn" onClick={props.handleSuccessLaunch}>True</button>
            <button className="launching-btn"  onClick={props.handleSuccessLaunch}>False</button>
            </div>
            <h3 className="landing filters ">Successful Landing</h3>
            <div className="filters launch-btn">
            <button className="landing-btn" onClick={props.handleSuccessLanding}>True</button>
            <button className="landing-btn"  onClick={props.handleSuccessLanding}>False</button>
            </div>

        </div>

    )
}

export default Filter
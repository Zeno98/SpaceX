import axios from "axios";
import React from "react";
import SinglePage from "../SinglePage/SinglePage";
import "../Content/Content.css"
import Filter from "../Filter/Filter"

let Content=()=>{

    let firstTimeAPI = "https://api.spaceXdata.com/v3/launches?limit=100";

    let [content,setContent]=React.useState([]);
    let [year, setYear] = React.useState("");
    let [successLaunch, setSuccessLaunch] = React.useState("");
    let [successLanding, setSuccessLanding] = React.useState("");
    let [buttonColor, setButtonColor] = React.useState("#a1e583");

    let fetchContent=async()=>{
        let {data}=await axios.get(firstTimeAPI)
        setContent(data);
    }

    let fetchFilterContent = async (year, successLaunch, successLanding) => {
        if (year) {
            firstTimeAPI = firstTimeAPI + "&launch_year=" + year;
        }
        if (successLaunch) {
            firstTimeAPI = firstTimeAPI + "&launch_success=" + successLaunch;
        }
        if (successLanding) {
            firstTimeAPI = firstTimeAPI + "&land_success=" + successLanding;
        }

        console.log(firstTimeAPI);

        let { data } = await axios.get(firstTimeAPI);
        setContent(data);
    }

    React.useEffect(() => {
        // Initital Call API
        if (year === "" && successLaunch === "" && successLanding === "") {
            fetchContent()
        }
        // All Filter API
        else if (year !== "" && successLaunch !== "" && successLanding !== "") {
            fetchFilterContent(year, successLaunch.toLowerCase(), successLanding.toLowerCase())
        }
        // Year and Success Launch API
        else if (year !== "" && successLaunch !== "") {
            fetchFilterContent(year, successLaunch.toLowerCase(), null)
        }
        // Year and Success Landing API
        else if (year !== "" && successLanding !== "") {
            fetchFilterContent(year, null, successLanding.toLowerCase())
        }
        // Success Launch and Success Landing API
        else if (successLaunch !== "" && successLanding !== "") {
            fetchFilterContent(null, successLaunch.toLowerCase(), successLanding.toLowerCase())
        }
        // Year API
        else if (year !== "") {
            fetchFilterContent(year, null, null);
        }
        // Success Launch API
        else if (successLaunch !== "") {
            fetchFilterContent(null, successLaunch.toLowerCase(), null);
        }
        // Success Landing API
        else if (successLanding !== "") {
            fetchFilterContent(null, null, successLanding.toLowerCase());
        }
    }, [year, successLaunch, successLanding])


    function handleYearFilter(e) {
        console.log(`Year Filter Clicked ${e.target.innerText}`);
        setYear(() => e.target.innerText);
    }

    function handleSuccessLaunchFilter(e) {
        console.log(`Success Launch Filter Clicked ${e.target.innerText}`);
        setSuccessLaunch(() => e.target.innerText);
    }

    function handleSuccessLandingFilter(e) {
        console.log(`Success Landing Filter Clicked ${e.target.innerText}`);
        setSuccessLanding(() => e.target.innerText);
    }

    function handleColorFilter(){
        setButtonColor("#47cd0e");
    }

    function handleClear(){
        window.location.reload();
    }

    return (
        <>
       
        <div className="card"> 
        <div className="filter">
                <Filter
                 handleYearChange={handleYearFilter}
                 handleSuccessLaunch={handleSuccessLaunchFilter}
                 handleSuccessLanding={handleSuccessLandingFilter} 
                 handleColorChange={handleColorFilter}
                 handleClear={handleClear}/>
                 </div>

                 <div className="content" >
                {
                   content.map((items)=>{
                        return( 
                        <div className="eachItem"> 
                            <SinglePage items={items}/>
                        </div>
                        )
                    })
                }
                </div>
            
        </div>
        </>
    )
}

export default Content;
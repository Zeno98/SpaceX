import "../SinglePage/SinglePage.css"
let SinglePage=({
    items
        })=>{
    return(
        <>
        
        <div className="card-style ">
            <div className="card-body">
            <img className="img" src={items.links.mission_patch_small} alt=""/>
            <br/>
           <b className="card-body title"> {`${items.mission_name} # ${items.flight_number}`}</b>
           <br/>
           <b className="card-body">Mission Ids:</b>
           <br/>
           <span className="card-body"><b className="card-body"> Launch Year:</b> {items.launch_year}</span>
           <br/>
           <span className="card-body"><b className="card-body">Successful Launch:</b> {`${items.launch_success}`}</span>
           <br/>
           <span className="card-body"><b className="card-body"> Successful Landing:</b> {`${items.rocket.first_stage.cores[0].land_success}`}</span>
           <br/>
           </div>
        </div>
        </>
    )
}

export default SinglePage;
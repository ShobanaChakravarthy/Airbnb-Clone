import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom';
import "./Banner.css"
import Search from './Search';
import {useStateValue} from "./StateProvider";

function Banner() {
    const history= useHistory();
    const[{showSearch},dispatch]=useStateValue();

    const handleClick = () => {
        dispatch({
            type:"SHOW_SEARCH",
            showSearch: !showSearch
        })
    }
    return (
        <div className="banner">
            <div className="banner__search">
                <Button onClick={handleClick} variant="outlined" className="banner__searchButton">
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
                {showSearch && <Search/>}
            </div>
            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different gateway to uncover the hidden gems near you</h5>
                <Button variant="outlined" onClick={()=>history.push("/search")}>Explore nearby</Button>
            </div>
        </div>
    )
}

export default Banner

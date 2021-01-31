import React from 'react'
import "./Search.css"
import {DateRangePicker} from "react-date-range";
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css";
import { useStateValue } from './StateProvider';
import { People } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

// Datepicker component
function Search() {
    const history = useHistory()
    const[{startDate,endDate,inp},dispatch]=useStateValue();
    function handleSelect(ranges){
        dispatch({
            type: "SET_DATE",
            startDate: ranges.selection.startDate,
            endDate: ranges.selection.endDate
        })
    }
    //same above logic using normal state
    // const[startDate,setStartDate]=useState(new Date())
    // const[endDate,setEndDate]=useState(new Date())
    // function handleSelect(ranges){
    //     setStartDate(ranges.selection.startDate)
    //     setEndDate(ranges.selection.endDate)
    // }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const handleInp = (e) => {
        dispatch({
            type:"SET_INP",
            inp: e.target.value
        })
    } 
    return (
        <div className="search">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect}/>
            <h2>Number of guests<People/> </h2>
            <input type="number" value={inp} onChange={handleInp} defaultValue={2} min={0}/>
            <Button onClick={()=>history.push("/search")}>Search Airbnb</Button>
        </div>
    )
}

export default Search

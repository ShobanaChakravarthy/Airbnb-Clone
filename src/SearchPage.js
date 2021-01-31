import { Button } from '@material-ui/core';
import React from 'react'
import "./SearchPage.css"
import SearchResult from './SearchResult';
import {useStateValue} from "./StateProvider"

function SearchPage() {
    const[{ startDate, endDate,inp }]=useStateValue();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var startMonth = months[startDate.getMonth()]
    var endMonth = months[endDate.getMonth()]
    return (
        <div className="searchpage">
            <div className="searchpage__info">
                <p>62 stays • {startDate.getDate()} {startMonth} to {endDate.getDate()} {endMonth} • {inp} guests </p>
                <h1>Stays Nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of Place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and Beds</Button>
                <Button variant="outlined">More Filters</Button>
            </div>
            <SearchResult
            img="https://a0.muscache.com/im/pictures/15170151-eb45-42a2-aabf-f6206369b12d.jpg?im_w=720"
            location="Pondicherry"
            title="Wildflowers 3BHK Full Apartment in Heritage Town"
            description="2 guests  · Studio  ·  1bed  · 1bathroom"
            star={4.92}
            price="₹2,111/night"
            total="₹4,500 total"
            />
            <SearchResult
            img="https://a0.muscache.com/im/pictures/7d027037-a878-4aee-9e8c-ee98a9ce3043.jpg?im_w=720"
            location="Entire Flat in Chennai"
            title="STUDIO ROOM WTH PRIVATE TERRACE @OMR THORAIPAKKAM"
            description="2 guests  · Studio  ·  1bed  · 1bathroom"
            star={4.92}
            price="₹2,111/night"
            total="₹4,500 total"
            />
        </div>
    )
}

export default SearchPage

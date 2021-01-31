import { FavoriteBorder, Star } from '@material-ui/icons'
import React from 'react'
import "./SearchResult.css"

function SearchResult({img,location,title,description,star,price,total}) {
    return (
        <div className="searchresult">
            <img src={img} alt={title}/>
            <FavoriteBorder className="searchresult__heart"/>
            <div className="searchresult__info">
                <div className="searchresult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>______</p>
                    <p>{description}</p>
                </div>
                <div className="searchresult__infoBottom">
                    <div className="searchresult__stars">
                        <Star className="searchresult__star"/>
                        <p><strong>{star}</strong></p>
                    </div>
                    <div className="searchresult__price">
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult

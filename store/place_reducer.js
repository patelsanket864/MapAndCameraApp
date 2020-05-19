import React from 'react';
import {PLACE_TITLE, FETCH_PLACE} from '../store/place_action';
import Place from '../model/Place';

const initialState = {
    places : []
}

const place_reducer = (state = initialState, action)=>{
    switch (action.type) {
        case FETCH_PLACE:
            return {
                
                places : action.places.map(
                    pl => new Place(pl.id.toString(), pl.title, pl.imageuri))
            };

        case PLACE_TITLE:
            const place= new Place(action.placeData.id.toString() , action.placeData.title, action.placeData.imguri);
            return {
                places: state.places.concat(place)
            }
        default:
            return state;
    }
}

export default place_reducer;
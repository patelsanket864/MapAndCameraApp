import * as FileSystem  from 'expo-file-system';
import { insertPlace } from '../helper/db';
export const PLACE_TITLE = 'PLACE_TITLE';
export const FETCH_PLACE = 'FETCH_PLACE';
import {fetchPlace} from '../helper/db';
export const placeTitle = (title,imguri) =>{
    return async dispatch=>{
        const filename = imguri.split('/').pop();
        const newPath=FileSystem.documentDirectory + filename;

        await FileSystem.moveAsync({
            from : imguri,
            to : newPath
        })

        const dbResult = await insertPlace(title, newPath , 'vastral', 22.3, 43.3);
        dispatch({type : PLACE_TITLE, placeData:{id: dbResult.insertId ,title : title ,imguri : newPath} } )
    };
}

export const fetchAction =()=>{
    return async dispatch=>{
        try{
            const fetchp = await fetchPlace();
            dispatch({type : FETCH_PLACE, places : fetchp.rows._array})
        }catch(err){
            console.log(err)
        }

       
    }
}
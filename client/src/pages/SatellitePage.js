import {useEffect, useState} from 'react';
import axios from 'axios';

export default function SatellitePage(){
    const [largestSatelliteStatus, setLargestSatelliteStatus] = useState("Loading...");
    const [satelliteByName, setSatelliteByName] = useState(null);

    //load largest satellite
    const loadLargestSatellite = async () => {
        const res = await axios.get('/satellite/size?pick=largest')
        console.log("the data is ", res)
        setLargestSatelliteStatus(res.data);
    }

    //load satellite by name 
    const loadSatelliteByName = async(name) => {
        try {
            const res = await axios.get(`/satellite/find/${name}`)
            console.log("the data is", res);
            setSatelliteByName(res.data);
        } catch (error) {
            console.error("There was an error:",error)
            setSatelliteByName(null);
        }
    }

    //handle the submit
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const searchedSatellite = formData.get('satellite');

        loadSatelliteByName(searchedSatellite);
    }

    //this will be called when the pagecomponent is rendered
    useEffect(() => {
        console.log("The page is rendering, loading the data....")
        //do the initial load of the largest satellite
        loadLargestSatellite();
        //loadSatelliteByName('Moon');
    },[])
  
    return (
        <>
        <h1>Largest Satellite</h1>
        <p>{largestSatelliteStatus}</p>

        <h1>Find a satellite by name</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="satellite" />
            <button>Find Satellite</button>
        </form>

        { satelliteByName ? (
         <>
        <h3>The result is: </h3>
        <p>Name: {satelliteByName.name } </p>
        <p>Density: {satelliteByName.density } </p>
        <p>Magnitude: {satelliteByName.magnitude } </p>
        <p>Radius: {satelliteByName.radius } </p>
        <p>Albedo: {satelliteByName.albedo } </p> 
        </>
        ) : (<p>No results found</p>)}
        </>
    )
}
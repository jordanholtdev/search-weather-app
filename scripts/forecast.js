const key = 'LiDIZBxJWpxfmxTg8Y1lYb6APQ3TpT2v';

// get weather info
// the parameter id is the city location key 
const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};

// fetch the city info
const getCity = async (city) => {

        // this base is the base url city search resource or endpoint
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        // these are the query parameter to the city search 
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return (data[0]);

};




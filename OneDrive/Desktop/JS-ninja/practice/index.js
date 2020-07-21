// const now = new Date();

// const before = new Date('14 january 2020 11:30');

// console.log(before.getTime());

// const diff = now.getTime() - before.getTime();

// console.log(diff);

// const min = Math.round( diff / 1000 / 60);

// console.log(min);

// const hrs = Math.round(min / 60);

// console.log(hrs);

// const days = Math.round(hrs / 24);

// console.log(days);

// const getData = async () =>{

//     const response = await fetch('todos/luigis.json');

//     if(response.status !== 200){
//         throw new Error('Could not retrive data');

//     }

//     const data =await  response.json();
//     return data;


// }

// getData()
//    .then( data => console.log('reponse: ', data))
//     .catch(err => console.log('rejected: ', err.message))
   






const key ='kRRgs69cyUctLSDkGXEj8JoqGdb6ID3G';

const getWeather = async (city) =>{
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';

    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);

    const data = await response.json();

    return data[0];
}

getWeather('manchester')
   .then(data => console.log(data))
   .catch(err => console.log(err));
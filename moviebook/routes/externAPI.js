var express = require('express');
var router = express.router();
var axios = require('axios');
		

async function getfromOMDB(moviename){
	console.log("in omdb api call")
    //get movie data
	await axios.get('http://www.omdbapi.com/?s='+moviename + '&apikey=b48abe3').then(
		async(req,res) => {
			try {
				console.log(res.data);
			} catch(err){
			res.status(400).json({messge: err.message});
			}
		}
	);
   
    //get movie picture
    await axios.get('http://img.omdbapi.com/?s=' + moviename + '&apikey=b48abe3').then(
		async(req,res) => {
            try {
		    	console.log(res.data);
            } catch(err) {
				res.status(400).json({messge: err.message});
			 }
		}
	);

	return {}

}
module.exports = router;

export const ExternalRoutes = {
	getfromOMDB
};
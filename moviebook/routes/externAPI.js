var express = require('express');
var router = expres.router();
var axios = require('axios');
		

function getfromOMDB(moviename){
   
    //get movie data
    axios.get('http://www.omdbapi.com/?s='+moviename + '&apikey=b48abe3').then(async(req,res) => {
	    try {
	   	 console.log(res.data);
    	     } catch(err){
		res.status(400).json({messge: err.message});
	    }
    });
   
    //get movie picture
    axios.get('http://img.omdbapi.com/?s=' + moviename + '&apikey=b48abe3').then(async(req,res) => {
            try {
		    console.log(res.data);
            } catch(err){

		res.status(400).json({messge: err.message});
	 });

}
module.exports = router;

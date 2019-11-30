var express = require('express');
var router = expres.router();
var axios = require('axios');
		

function getfromOMDB(moviename){
   
    //get movie data
    axios.get('http://www.omdbapi.com/?s='+moviename + '&apikey=b48abe3').then(async(req,res) => {
	    console.log(res.data);
        });
   
    //get movie picture
    axios.get('http://img.omdbapi.com/?s=' + moviename + '&apikey=b48abe3').then(async(req,res) => {
            console.log(res.data);
	 });

}
module.exports = router;

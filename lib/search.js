//make the request to reddit api and return the data 

//fetch is only native to the browser so we have to use axios
const axios = require('axios')

const search = {

    subreddit : async function(query){
        const res = await axios.get(`https://www.reddit.com/r/${query}.json`)
        
    }
}

module.exports = search

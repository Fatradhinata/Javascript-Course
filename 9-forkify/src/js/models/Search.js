import axios from 'axios';

// var cors = require('cors')

// app.use(cors())

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResult() {
        const proxy = "https://cors-anywhere.herokuapp.com";
        const key = '9c8b06d329136da358c2d00e76946b0111ce2c48';
        
        try {
            const response = await axios.get(`https://forkify-api.herokuapp.com/api/search`, {
                params: {
                    q: this.query
                }
            });
            
            this.result = response.data.recipes;
            console.log(response.data.recipes);
        } catch (error) {
            console.error('Error: ', error.response.data);
        }
    }
}

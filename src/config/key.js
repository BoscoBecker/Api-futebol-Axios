var  httpAxios = require('axios');
const dotenv = require('dotenv');
      dotenv.config();

 httpAxios = new httpAxios.create({
      baseURL: `${process.env.API_URL}`,
      headers: { 'Authorization': `Bearer ${process.env.API_KEY}`}
      });

module.export = httpAxios;    

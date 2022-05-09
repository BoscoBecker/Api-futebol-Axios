const yup = require('yup');
const axios = require('axios');
const key = require('../config/key');

exports.getFases = async (req, res) => {
    try {
        const id = req.params.id;
        const idfases = req.params.idfases;

        const shema = yup.object().shape({
            id: yup.number().required(),
            idfases: yup.number().required()
        });

        if (!(await shema.isValid(id) || shema.isValid(idfases))) {
            return res.status(400).send({
                message: 'Bad Request',
                body: 'Invalid id'
            });
        }


        let Getfases = await
        axios.get(`${process.env.API_URL}/campeonatos/${id}/fases/${idfases}`, {
            headers: {
                'Authorization': `Bearer ${process.env.API_KEY}`
            }
        });
        res.status(200).json(Getfases.data);

    } catch (error) {
        return res.status(500).send({
            messege: 'Internal Server Error',
            body: error
        });

    }
}
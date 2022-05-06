const yup = require('yup');
const axios = require('axios');
const key = require('../config/key');


exports.getCampeonatos = async (req, res) => {
    try {
        let Getcampeonatos = await
            axios.get(`${process.env.API_URL}/campeonatos`, {
                headers: { 'Authorization': `Bearer ${process.env.API_KEY}` }
            });
        res.status(200).json(Getcampeonatos.data);
    } catch (error) {
        return res.status(500).send({
            messege: 'Internal Server Error',
            body: error
        });
    }
}


exports.getCampeonatoById = async (req, res) => {
    try {
        const id = req.params.id;

        const shema = yup.object().shape({
            id: yup.number().required()
        });

        if (!(await shema.isValid({ id }))) {
            return res.status(400).send({
                message: 'Bad Request',
                body: 'Invalid id'
            });
        }

        let GetcampeonatoById = await
            axios.get(`${process.env.API_URL}/campeonatos/${id}`, {
                headers: { 'Authorization': `Bearer ${process.env.API_KEY}` }
            });
        res.status(200).json(GetcampeonatoById.data);

    } catch (error) {

        return res.status(500).send({
            messege: 'Internal Server Error',
            body: error
        });
    }

}


import cors from 'cors';

const corsOptions = {
    //Origin corresponde a la ruta del proyecto, sea local o desde un puerto.
    origin: '',
    //Options es la primera petición de una consulta de la conexión.
    optionSuccessStatus: 200
}

//
module.exports = cors(corsOptions);
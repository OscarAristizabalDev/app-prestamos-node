import express = require('express');
import path = require('path');
import cors = require('cors');
const sequelize = require('../util/database');
const Customer = require('../models/customer.model');
const Lending = require('../models/lending.model');

// exportar clase para ser usada en otros archivos
export default class Server {

    public app: express.Application;
    public port: number;

    constructor(port: number) {
        this.port = port;
        this.app = express();
        this.configMiddleware();
        this.configCors();
    }

    // Metodo init para instanciar la clase server, siempre usando la misma instancia
    static init(port: number) {
        return new Server(port);
    }
    // Clase para iniciar el servidor
    start(callback: any) {
        // Se indica el puerto por el que va a escuchar el server y se envía una función callback
        this.app.listen(this.port, callback);
        // Se llama el metodo public folder para que la app utilice la carpeta publica
        this.publicFolder();     
        // Configuración sequelize
        this.configSequelize();
    }
    // 
    private publicFolder() {
        // indica la direccion de la carpeta publica
        const publicPath = path.resolve(__dirname, '../public');
        // Se le indica a la app que utilice la carpeta publica
        this.app.use(express.static(publicPath));
    }

    private configMiddleware(){
        // Se configura para que recibe datos por Json
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
    }

    private configCors(){
        this.app.use(cors());
    }


    private configSequelize(){

        // Rutas
        this.app.get('/', function (req, res) {

            // Customer.create({
            //     name: "Pepe",
            //     birthday: new Date(1999, 4, 6)
            // }).then((customer: any) => {
            //     res.json(customer);
            // });

            // Lending.create({
            //     name: "Pepe",
            //     birthday: new Date(1999, 4, 6)
            // }).then((customer: any) => {
            //     res.json(customer);
            // });

            // User.findAll().then(users => {
            //     res.json(users);
            // });

        });

        // Conectase a la base de datos
        // Force true: DROP TABLES
        sequelize.sync({ force: true }).then(() => {
            console.log("Nos hemos conectado a la base de datos");
        }).catch((error: any) => {
            console.log('Se ha producido un error', error);
        })
    }
}
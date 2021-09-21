import Server from './server/server';

// Se instacia el servidor por el puerto 3000
const server = Server.init(3000);
// Se especifica al server app que rutas van a funcionar


// Mysql.instance;
// He iniclializados el servidor
server.start(()=>{
    console.log('Servidor corriendo en el puerto 3000')
});
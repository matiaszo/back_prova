const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'bj8sfq4npoch4vc6dogq-mysql.services.clever-cloud.com',
  user: 'urydpt78o2hebddc',
  password: 'rSlcW14njmntopHgqMtI',
  database: 'bj8sfq4npoch4vc6dogq',
});

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados');
});

module.exports = connection;
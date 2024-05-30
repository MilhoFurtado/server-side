import mysql2 from "mysql2/promise"
async function connect() {
    if (global.connection && global.connection.state !== 'disconnect'){
        return global.conn
    }

    const mysql = mysql2
    const connection = await mysql.createConnection("mysql://root:@localhost:3306/jornais")
    console.log("Conectado ao SGBD Mysql")
    global.connection = connection
    return connection
}

export default connect
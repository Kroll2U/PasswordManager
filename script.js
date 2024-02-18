const mysql = require('mysql')

let connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: null,
	database: 'node test',
})

connection.connect(function (err) {
	if (err) {
		console.log(err.code)
		console.log(err.fatal)
		return
	}

	console.log('Connected to the database')
})

const query = 'SELECT * FROM userInfo'

connection.query(query, function (err, rows, fields) {
	if (err) {
		console.log('An error occurred with the query')
		return
	}

	console.log('Query successfully executed', rows)
})

connection.end(function (err) {
	if (err) {
		console.log('Error closing the connection', err)
		return
	}

	console.log('Connection closed')
})

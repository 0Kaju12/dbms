const express = require('express');

const mysql = require('mysql');

const connection = mysql.createConnection({
	host:'localhost',
	port:3306,
	database: 'bank',
	user:'root',
	password:''
});

var database_connection_status = '';

connection.connect(function(error){
	if(error)
	{
		database_connection_status ='<h3 class = "text-center text-danger">MySQL Database Connection Error</h3>';
	}
	else
	{
		database_connection_status ='<h3 class = "text-center ">MySQL Database connected successfully</h3>';
	}

});

const app = express();

app.use(express.urlencoded());

app.get('/', function(request, response, next){

	response.send(`
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	<div class="container">
		<h1 class="text-center mt-3 mb-3">Submit Form Data in Node.js</h1>
		`+database_connection_status+`
		<div class="card">
			<div class="card-header">Sample Form</div>
			<div class="card-body">
				<form method="POST" action="/">
					<div class="mb-3">
						<label>Name</label>
						<input type="text" name="name" id="name" class="form-control" />
					</div>
					<div class="mb-3">
						<label>Phone</label>
						<input type="text" name="phone" id="phone" class="form-control" />
					</div>

					<div class="mb-3">
						<label>Email Address</label>
						<input type="text" name="email_address" id="email_address" class="form-control" />
					</div>
					<div class="mb-3">
						<label>CustomerID</label>
						<input type="text" name="CustomerID" id="CustomerID" class="form-control" />
					</div>
					<div class="mb-3">
					<label>Password</label>
					<input type="password" name="Password" id="Password" class="form-control" />
					</div>
					<div class="mb-3">
						<input type="submit" name="submit_button" class="btn btn-primary" value="Add" />
					</div>
				</form>
			</div>
		</div>
	</div>
	
	`);


});

app.post('/', function(request, response, next){

	var sql = "insert into customer(CustomerID,Name,Email,Password,Phone) values ('123','adsa','1231fasf','fasfas','321')";
	connection.query(sql);
	response.send(request.body);

});

app.listen(2000);


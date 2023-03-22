This Express.js based REST API for MySQL has been created using express-generator in Node v.18.13.

The MySQL database is hosted in freemysql.net.

### Usage:

 - Show all data : ferdinan.vercell.app
 - Show data based on 'id' : ferdinan.vercel.app/[id]
 - Search data with query string :
	 - ferdinan.vercel.app?model=[string]
	 - ferdinan.vercel.app?model=[string]&manufacturer=[string]
	 - ferdinan.vercel.app?model=[string]&manufacturer=[string]&year=[number]
 - Insert data :
	 - POST => ferdinan.vercel.app
	 - request body :
		 - {
			  id: null,
			  model: [string, no null],
			  manufacturer: [string, no null],
			  year: [number, no null]
		 - }
 - Update data based on 'id' :
	 - PUT => ferdinan.vercel.app/[id]
 - Delete data based on 'id' :
	 - DELETE => ferdinan.vercel.app/[id]

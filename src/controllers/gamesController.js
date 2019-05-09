const controller={};

controller.list=(req,res)=>{
	req.getConnection((err,conn)=>{
		conn.query('SELECT * FROM Juego', (err,games)=> {
			if(err){
				res.json(err);
			}
			//console.log(games);
			res.render('games',{
				data: games
			})
		});
	});
};


//video 1:06:04
controller.save = (req, res)=>{
	const data = req.body;
	req.getConnection((err , conn)=>{
		conn.query('INSERT INTO Juego set ?',[data],(err,games)=>{
			console.log(games);
			res.redirect('/');
		})
	})
};

module.exports = controller;
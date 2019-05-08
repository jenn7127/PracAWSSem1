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

controller.save = (req, res)=>{
	
};

module.exports = controller;
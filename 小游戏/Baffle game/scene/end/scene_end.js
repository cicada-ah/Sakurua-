var sceneEnd = function(game) {
	var s = {
		game: game,
	}

	game.registerAction('r', function(){
		var s = sceneTitle(game)
		game.replaceScene(s)
	})
	s.draw = function() {
		// draw Labels
		game.ctx.fillText('游戏结束 :按R重来', 100, 290)
	}
	// draw Labels

	s.update = function() {

	}
	return s
}
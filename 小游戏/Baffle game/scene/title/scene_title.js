var sceneTitle = function(game) {
	var s = {
		game: game,
	}

	s.draw = function() {
		// draw Labels
		game.ctx.fillText('开始游戏', 100, 190)
	}
	// draw Labels

	game.registerAction('k', function(){
		var s = scene(game)
		game.replaceScene(s)
	})

	s.update = function() {

	}
	return s
}
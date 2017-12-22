var scene = function(game) {
	var s = {
		game: game,
	}
	var	paddle = Paddle(game)
	var	ball = Ball(game)
	var	score = 0
	var enableDrag = false
	blocks = loadLevel(game, 1)

	game.registerAction('a', function(){
		paddle.moveLeft()
	})
	
	game.registerAction('d', function(){
		paddle.moveRight()
	})	

	game.registerAction('f', function(){
		ball.fire()
	})
	game.canvas.addEventListener('mousedown', function(event){
		var x = event.offsetX
		var y = event.offsetY
		// 检测是否点中
		if (ball.hasPoint(x, y)){
			// 设置拖拽状态
			enableDrag = true
		}
	})
	game.canvas.addEventListener('mousemove', function(event){
		var x = event.offsetX
		var y = event.offsetY
		if(enableDrag){
			ball.x = x
			ball.y = y
		}
	})
	game.canvas.addEventListener('mouseup', function(event){
		var x = event.offsetX
		var y = event.offsetY
		enableDrag = false
	})
	s.draw = function() {
		// draw 背景
		game.ctx.fillStyle = '#353232'
		game.ctx.fillRect(0, 0, 400, 400)
		game.drawImage(paddle)
		game.drawImage(ball)
		for(var i = 0; i < blocks.length; i++ ){
			var block = blocks[i]
			if (block.alive)
			{
				game.drawImage(blocks[i])
			}
	}
	// draw Labels
	game.ctx.fillText('分数:'+ score, 10, 380)
	}
	s.update = function() {
		if (paused) {
			return
		}
		ball.move()
		// 判断结束
		if (ball.y > paddle.y ){
			// 跳转到游戏结束的场景
			var end = sceneEnd(game)
			game.replaceScene(end)
		}

		//判断相撞
		if (paddle.collide(ball)){
			ball.反弹()
		}

		// 判断ball和Blocks
		for(var i = 0; i < blocks.length; i++ ){
			var block = blocks[i]
			if (block.collide(ball)){
				block.kill()
				ball.反弹()
				//update score
				score += 100

			}
		}		
	}
	return s
}
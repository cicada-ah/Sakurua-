
// set game
var guaGame = function(images, runCallback){
	// images 是一个对象，里面是图片的名字
	// 程序会在所有图片载入成功后运行
	var g = {
		scene: null,
		actions : {},
		keydowns : {},
		images : {},
	}
	var canvas = document.querySelector('#myCanvas')
	var ctx = canvas.getContext('2d')
	g.canvas = canvas
	g.ctx = ctx	
	//draw
	g.drawImage = function(guaImage) {
		g.ctx.drawImage(guaImage.image, guaImage.x, guaImage.y)		
	}
	// evnets
	window.addEventListener('keydown', function(ev){
		g.keydowns[ev.key] = true
	})
	window.addEventListener('keyup', function(ev){
		g.keydowns[ev.key] = false
	})



	g.registerAction = function(key, callback) {
		g.actions[key] = callback
	}
	// set timer
	window.fps = 30
	var runloop = function() {
		var actions = Object.keys(g.actions)
		for (var i = 0; i <actions.length; i++) {
			var key = actions[i]
			if (g.keydowns[key]){
				g.actions[key]()
			}
		}
		g.scene.update()
		ctx.clearRect(0, 0, canvas.width, canvas.height)
		g.scene.draw()
		//next run loop
		setTimeout(function(){
		//events
		runloop()
	}, 1000/window.fps)		
	}

	//
	var loads = []
	var names = Object.keys(images)
	// 预载图片
	for (var i = 0; i < names.length; i++) {
		let name = names[i]
		var path = images[name]
		let img = new Image()
		img.src = path
		img.onload = function(){
			// 存入g.images 中
			g.images[name] = img
			loads.push(1)
			if (loads.length == names.length) {
				g.run()
			}
		}
	}
	g.imageByName = function(name) {
		var img = g.images[name]
		var image = {
			w: img.width,
			h: img.height,
			image: img,
		}
		return image
	}
	// 开始运行程序
	g.runWithScene = function(scene) {
		g.scene = scene
		setTimeout(function(){
			//events
			runloop()
		}, 1000/fps)	

	}
	g.replaceScene = function(scene) {
		g.scene = scene
	}
	g.run = function(scene) {
		runCallback(g)

	}
	return g
}
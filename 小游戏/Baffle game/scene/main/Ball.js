var Ball = function(game){
	var o = game.imageByName('ball')
	o.x= 100,
	o.y= 200,
	o.speedX= 10,
	o.speedY= 10,
	o.filed= false,
	o.fire = function() {
		o.fired = true
	}
	o.move = function(){
		if(o.fired){
			if (o.x< 0 || o.x > 400) {
				o.speedX = -o.speedX
			}
			if (o.y< 0 || o.y > 400) {
				o.speedY = -o.speedY
			}
			o.x += o.speedX
			o.y += o.speedY
		}
	}
	o.反弹 = function() {
		o.speedY *= -1
	}

	o.hasPoint = function(x, y) {
		var xIn = x >= o.x && x <= o.x + o.w
		var yIn = y >= o.y && y <= o.y + o.w
		return xIn && yIn
	}
	return o
}
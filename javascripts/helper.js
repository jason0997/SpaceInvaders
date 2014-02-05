// JavaScript Document
function get_right_side(matrix, row , col){
	for(i = row-1; i>=0; i--){
		for(j = 0; j< col; j++){
			if(matrix[i][j] == 1){
				return (i+1);
			}
		}
	}
}

function get_left_side(matrix, row , col){
	for(i = 0; i<row; i++){
		for(j = 0; j< col; j++){
			if(matrix[i][j] == 1){
				return (i+1);
			}
		}
	}
}

function get_down_side(matrix, row , col){
	for(j = col - 1; j >= 0; j--){
		for(i = 0; i < row; i++){
			if(matrix[i][j] == 1){
				return (j+1);
			}
		}
	}
}

function get_down_side_right(matrix, row, down){
	for(i = row-1; i>=0; i--){
		if(matrix[i][down-1] == 1){
			return (i+1);	
		}
	}
}

function get_down_side_left(matrix, row, down){
	for(i = 0; i<row; i++){
		if(matrix[i][down-1] == 1){
			return (i+1);	
		}
	}
}

function player_explosion(x, y, context){
		expImg = new Image();
		expImg.onload = function() {
			var expObj ={
				x:x,
				y:y
			};
		};
	
		expImg.src = "images/exp.png";
		var i=0;
		var j=0;
		var interval = setInterval(function(){
			ctx.clearRect(x-2,y-10,20,20);
			ctx.drawImage(expImg,i, j,64,64,x, y-5, 18,18);
			if(i<256){
			   i+=64;
			}else{
			   i=0;
			   j+=64;
			}
			if(j == 256){
				ctx.clearRect(x-2,y-10,20,20);
				clearInterval(interval);
			}
		},100);
		
}


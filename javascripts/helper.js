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

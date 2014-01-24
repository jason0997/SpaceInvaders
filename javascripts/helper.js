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
				return (i);
			}
		}
	}
}

function get_down_side(matrix, row , col){
	for(i = row-1; i>=0; i--){
		for(j = 0; j< col; j++){
			if(matrix[j][i] == 1){
				return (i+1);
			}
		}
	}
}

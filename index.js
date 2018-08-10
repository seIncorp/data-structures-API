/*
 * author: Simon E (https://github.com/seIncorp)
 * license: MIT
 */

var DTA = {};

DTA.Stack = {
		new: function(){
			return new Stack();
		},
		
		fill: function(stack,array){
			array.forEach(v => {
				stack.push(v);
			});
		},
		
		reset: function(stack){
			stack.array = [];
		}
};
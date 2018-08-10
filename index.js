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

DTA.LinkedList = {
		new: function(){
			return new LinkedList();
		},
		
		fill: function(list,array){
			array.forEach(v => {
				list.append(v);
			});
		},
		
		reset: function(list){
			list.head = null;
			list.tail = null;
		}
};

DTA.DoublyLinkedList = {
		new: function(){
			return new DoublyLinkedList();
		},
		
		fill: function(list,array){
			array.forEach(v => {
				list.append(v);
			});
		},
		
		reset: function(list){
			list.head = null;
			list.tail = null;
		}
};


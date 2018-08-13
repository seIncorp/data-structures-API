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

DTA.Queue = {
		new: function(){
			return new Queue();
		},
		
		fill: function(list,array){
			array.forEach(v => {
				list.enqueue(v);
			});
		},
		
		reset: function(list){
			list.queue = [];
		}
};

DTA.BloomFilter = {
		new: function(){
			return new BloomFilter();
		},
		
		fill: function(list,array){
			array.forEach(v => {
				list.insert(v);
			});
		},
		
		reset: function(list){
			list.storage.reset();
		}
};


var aa = DTA.BloomFilter.new();

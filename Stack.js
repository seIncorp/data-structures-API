class Stack
{
	constructor()
	{
		this.array = [];
	}
}

/**
 * @return {boolean}
 */
Stack.prototype.isEmpty = function(){
	return this.array.length > 0 ? false : true;
};

/**
 * @return {*}
 */
Stack.prototype.peek = function(){
	return this.isEmpty() ? null : this.array[this.array.length-1];
};

/**
 * @param {*} value
 */
Stack.prototype.push = function(value){
	this.array.push(value);
};

/**
 * @return {*}
 */
Stack.prototype.pop = function(){
	const removed = this.array.pop();
	
	return removed ? removed : null;
};

/**
 * @return {*[]}
 */
Stack.prototype.toArray = function(){
	return [...this.array].reverse();
};

/**
 * @return {string}
 */
Stack.prototype.toString = function(){
	return [...this.array].reverse().toString();
};
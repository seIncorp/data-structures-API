class Queue
{
	constructor()
	{
		this.queue = [];
	}
}

Queue.prototype.isEmpty = function(){
	return this.queue.length > 0 ? false : true;
};

Queue.prototype.peek = function(){
	if(this.queue.length == 0)
		return null;
	
	return this.queue[0];
};

Queue.prototype.enqueue = function(value){
	this.queue.push(value);
};

Queue.prototype.dequeue = function(){
	const removed = this.queue.shift();
    return removed ? removed : null;
};

Queue.prototype.toString = function(char = ','){
	return this.queue.join(char);
};


class LinkedList
{
	constructor()
	{
		this.head = null;
		this.tail = null;
	}
}

/**
 * @param {*} value
 * @param {*} next
 * @return {Node}
 */
LinkedList.prototype.node = function(value, next){
	
	class Node
	{
		constructor(value, next = null)
		{
			this.value = value;
		    this.next = next;
		}
	}

	Node.prototype.toString = function(){
		console.log(this.value);
	};
	
	Node.prototype.changeValue  = function(value){
		this.value = value;
	};
	
	return new Node(value, next);
};

/**
 * @param {*} value
 * @param {*} node
 * @return {LinkedList}
 */
LinkedList.prototype.append = function(value, node = this.node(value)){

	if(!this.head) 
	{
		this.head = node;
		this.tail = node;
	}
	else
	{
		this.tail.next = node;
	    this.tail = node;
	}
	
    return this;
};

/**
 * @param {*} value
 * @param {*} node
 * @return {LinkedList}
 */
LinkedList.prototype.prepend = function(value, node = this.node(value, this.head)){

	this.head = node;

	if(!this.tail)
		this.tail = node;

	return this;
};

/**
 * @param {*} value
 * @return {Node}
 */
LinkedList.prototype.deleteNode = function(value){
	if (!this.head)
		return null;

	let removed = null;
	
	if(this.head.value == value)
	{
		removed = this.head;
		
		if(this.tail == this.head)
		{
			this.head = null;
			this.tail = null;
		}
		else
		    this.head = this.head.next;
		
	    return removed;
	}

	let currentNode = this.head;
	
	while(currentNode.next)
	{
		if(currentNode.next.value == value)
		{
			removed = currentNode.next;
			currentNode.next = currentNode.next.next;
			
			return removed;
		}
		else
			currentNode = currentNode.next;
	}
	
	if(this.tail.value == value)
		this.tail = currentNode;

	return removed;
};


/**
 * @param {*} value or [values]
 * @return {LinkedList}
 */
LinkedList.prototype.deleteNodes = function(value){
	if (!this.head)
		return null;

	let current = this.head;
	
	if(Array.isArray(value))
	{
		while(current && value[0] != undefined)
		{
			if(current.value == value[0])
			{
				this.deleteNode(value[0]);
				value.shift();
			}
			
			current = current.next
		}
	}
	else
	{
		while(current)
		{
			if(current.value == value)
				this.deleteNode(value);
			
			current = current.next
		}
	}
	
	return this;
};

/**
 * @param {*} value
 * @return {Node}
 */
LinkedList.prototype.find = function(value){
	if(!this.head)
		return null;

	let temp = [];
	let current = this.head;
	
	while(current)
	{
		if(current.value === value)
			temp.push(current);
		
		current = current.next;
	}
	
	return temp.length == 0 ? null : temp.length == 1 ? temp[0] : temp ;
};

/**
 * @return {LinkedList[]}
 */
LinkedList.prototype.toArray = function(){
	let temp = [];
	
	let current = this.head;
	
    while(current){
    	temp.push(current);
    	current = current.next;
    }
    
    return temp;
};

/**
 * @return {LinkedList Nodes values []}
 */
LinkedList.prototype.toArrayValues = function(){
	let temp = [];
	
	let current = this.head;
	
    while(current){
    	temp.push(current.value);
    	current = current.next;
    }
    
    return temp;
};

/**
 * @param {*} char
 * @return {string}
 */
LinkedList.prototype.toString = function(char = ','){
	return this.toArrayValues().join(char);
};
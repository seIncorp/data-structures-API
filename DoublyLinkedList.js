class DoublyLinkedList extends LinkedList
{
	constructor()
	{
		super();
	}
}

DoublyLinkedList.prototype.node = function(value, next, previous){
	class Node
	{
		constructor(value, next = null, previous = null)
		{
			this.value = value;
		    this.next = next;
		    this.previous = previous;
		}
	}

	Node.prototype.toString = function(){
		console.log(this.value);
	};
	
	Node.prototype.changeValue  = function(value){
		this.value = value;
	};
	
	return new Node(value, next, previous);
};

/**
 * @param {*} value
 * @param {*} node
 * @return {LinkedList}
 */
DoublyLinkedList.prototype.append = function(value, node = this.node(value)){

	if(!this.head) 
	{
		this.head = node;
		this.tail = node;
	}
	else
	{
		this.tail.next = node;
		node.previous = this.tail;
		this.tail = node;
	}
	
    return this;
};

/**
 * @param {*} value
 * @param {*} node
 * @return {LinkedList}
 */
DoublyLinkedList.prototype.prepend = function(value, node = this.node(value, this.head)){
	
	if(this.head)
		this.head.previous = node;
	
	this.head = node;
	
	if(!this.tail)
		this.tail = node;
	
	return this;
};

/**
 * @param {*} value
 * @return {Node}
 */
DoublyLinkedList.prototype.deleteNode = function(value){
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
		{
		    this.head = this.head.next;
		    this.head.previous = null;
		    
		}
	    return removed;
	}

	let currentNode = this.head;
	
	while(currentNode.next.next)
	{
		if(currentNode.next.value == value)
		{
			removed = currentNode.next;
			currentNode.next.next.previous = currentNode.next.previous;
			currentNode.next = currentNode.next.next;
			return removed;
		}
		else
			currentNode = currentNode.next;
	}
	
	if(this.tail.value == value)
	{
		removed = this.tail;
		this.tail = this.tail.previous;
		this.tail.next = null;
	}
	return removed;
};

/**
 * @param {*} value or [values]
 * @return {LinkedList}
 */
DoublyLinkedList.prototype.deleteNodes = function(value){
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

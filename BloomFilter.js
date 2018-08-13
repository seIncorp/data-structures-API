class BloomFilter
{
	constructor(size = 100)
	{
		this.size = size;
	    this.storage = this.createStore(size);
	}
}

BloomFilter.prototype.createStore = function(size){
	let storage = Array(size).fill(false);
    
	return {
			getValue: function(index){
				return storage[index];
			},

			reset: function(){
				storage = Array(size).fill(false);
			},
			
			setValue:function(index){
				storage[index] = true;
			}
	};
};

BloomFilter.prototype.insert = function(item){
	this.getHashValues(item).forEach(value => this.storage.setValue(value));
};

BloomFilter.prototype.getHashValues = function(item){
	return [
		this.hash1(item),
		this.hash2(item),
		this.hash3(item),
	];
};

BloomFilter.prototype.hash1 = function(item){
	let hash = 0;
	
	item.split('').forEach(value => {
		hash = (hash << 5) + hash + value.charCodeAt(0);
		hash &= hash;
		hash = Math.abs(hash);
	});

    return hash % this.size;
};

BloomFilter.prototype.hash2 = function(item){
	let hash = 5381;
	
	item.split('').forEach(value => {
		hash = (hash << 5) + hash + value.charCodeAt(0);
	});

    return Math.abs(hash % this.size);
};

BloomFilter.prototype.hash3 = function(item){
	let hash = 0;

	item.split('').forEach(value => {
		hash = (hash << 5) - hash;
		hash += value.charCodeAt(0);
		hash &= hash;
	});

    return Math.abs(hash % this.size);
};

BloomFilter.prototype.mayContain = function(item){
	let hashValues = this.getHashValues(item);

    for(let hashIndex = 0; hashIndex < hashValues.length; hashIndex += 1)
      if (!this.storage.getValue(hashValues[hashIndex]))
        return false;

    return true;
};
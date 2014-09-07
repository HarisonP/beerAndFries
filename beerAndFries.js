"use strict";
exports.beerAndFries =  function beerAndFries(items){
	var sortedItems = {};
	sortedItems.beer = [];
	sortedItems.fries = [];

	items.forEach(function(item, index){
		sortedItems[item.type].push(item.score);
	});

	sortedItems.beer.sort(function(current, next){
		return current - next;
	});
	sortedItems.fries.sort(function(current, next){
		return current - next;
	});

	var finalScore = 0;
	sortedItems.beer.forEach(function(item,index){
		finalScore += item * sortedItems.fries[index];
	});

	return finalScore;
}


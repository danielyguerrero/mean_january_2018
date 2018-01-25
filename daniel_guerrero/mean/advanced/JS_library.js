function each(arr, callback) {
    for(var i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
var _ = {
    map: function(arr,callback){
        var newarr=[];
        for ( var i =0; i <arr.length ; i++){
            newarr.push(callback(arr[i]));
        }
        console.log(newarr);
    },
    reduce: function(arr,callback) { 
        var sum = 0;
        for (var i = 0 ; i<arr.length;i++){
            sum = arr[i] + arr[i];
        }
        console.log(sum)
    },
    find: function(arr,callback){
        for (var i = 0; i <arr.length ; i++){
            if (callback(arr[i]) == true){
                console.log(arr[i]);
            }
        } 
    },
    filter: function(arr,callback) { 
        var evens = [];
        for (var i = 0; i <arr.length ; i++){
            if (callback(arr[i]) == true){
                evens.push(arr[i]);
            }
        } 
        console.log(evens);
    },
    reject: function(arr,callback) {
        var odds = [];
        for (var i = 0; i <arr.length ; i++){
            if (callback(arr[i]) == false){
                odds.push(arr[i]);
            }
        } 
        console.log(odds);
    }
}
var map= _.map([4, 2, 3], function(num){ return num * 3; });

var reduce = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);

var find =_.find([1, 2, 3], function(num){ return num % 2 == 0; });

var evens = _.reject([1,6,5,8,6,7,4,8,12], function(num){ return num % 2 == 0; });

var filter = _.filter([1,2,2,4,9,7,3,8,5], function(num){ return num % 2 == 0; });

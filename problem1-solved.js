//Write a function which takes an array of numbers and returns the minimum of that array.
//[3,4,5] -> 3
//[2, -30] -> -30

//function minimum(arr) {
//	var minSoFar = arr[0];
//	for (var i = 1; i < arr.length; i++) {
//		if(arr[i] < minSoFar) {
//			minSoFar = arr[i];
//		}
//	}
//	return minSoFar;
//}
//
//console.log(minimum([3,4,5]) == 3);
//console.log(minimum([2, -30]) == -30);
//console.log(minimum([0,1,2,-3]) == -3);
//console.log(minimum([0]) == 0);

//Write a function which takes an array of numbers and returns the maximum of that array.
//[3,4,5] -> 5
//[-10, 2] -> 2

//function maximum(arr) {
//	var maxSoFar = arr[0];
//	for (var i = 0; i < arr.length; i++) {
//		if(arr[i] > maxSoFar) {
//			maxSoFar = arr[i];
//		}
//	}
//	return maxSoFar;
//}
//
//console.log(maximum([3,4,5]) == 5);
//console.log(maximum([2, -30]) == 2);
//console.log(maximum([0,1,2,-3]) == 2);
////console.log(maximum([0]) == 0);
//
//Write a function which takes an array of numbers and returns the average of that array.
//[2, 4, 6] - > 4
//[0, 0, 0, 10] -> 2.5
//
//function averageOfNumbers(arr) {
//    var sum = arr[0];
//    for (var i = 1; i < arr.length; i++) {
//       sum = sum + arr[i]         //also --> arr[0] + arr[i]
//       return sum/arr.length     
//	
//	}
    
//    Write a function which takes an array of integers > 0 and returns  the first integer which does not appear in that array.
//[1,2,5] -> 3
//[1,2,3,4,5] -> 6
    
    function FirstInteger(arr){
        "use strict"
       var missingInt; 
        for(var i = 0; i < arr.length; i++){
            missingInt = arr[i];
            if(missingInt != i + 1){
            return i + 1;
        }
        }
        }

   function LastInteger(arr){
        "use strict"
       var missingInt; 
        for(var i = 0; i < arr.length; i++){
            missingInt = arr[i];
            if(missingInt != i + 1){
                return i + 1;
                }
        }
          return arr[arr.length - 1] +1;   
        }
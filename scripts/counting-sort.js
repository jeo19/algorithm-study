var countingSort = function(array, k) {
    var count = [], result = [];
    for (var i = 0; i <= k; i++) { // Once formatting the count of all number to zero.
      count[i] = 0;
    }
    console.log(count, result, array.length);
    for (var j = 0; j < array.length; j++) { // count and store the numbers.
      count[array[j]] += 1;
    }
    console.log(count, result, k);
    for (i = 0; i < k ; i++) { // Getting the cumulative sum
      count[i + 1] += count[i];
    }
    console.log(count, result);
    for (j = 0; j < array.length; j++) { // Pushing the number into the result based on Index that pointer the cumulative sum.
      console.log(array[j], count[array[j]] - 1);
      result[count[array[j]] - 1] = array[j];
      count[array[j]] -= 1;
    }
    console.log(count, result);
    return result;
  };
  countingSort([3,2,1,3,4,2,5,0,3,1,2],5)
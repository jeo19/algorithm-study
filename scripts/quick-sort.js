const numbers=[4,2,5,8,7,9,6,14,1,];
const partition=(numberArray,left,right,pivotIndex)=>{
    var temp;
    var pivot=numberArray[pivotIndex];
    while(left<=right){
        while(numberArray[left]<pivot)
        left++;
        while(numberArray[right]>pivot)
        right--;
        if(left<=right){
            temp=numberArray[left];
            numberArray[left]=numberArray[right];
            numberArray[right]=temp;
            left++;
            right--;
        }
    }
    temp=numberArray[left];
    numberArray[left]=numberArray[pivotIndex];
    numberArray[pivotIndex]=temp;
    return left;
}
const quickSort=(numberArray,left,right)=>{
    if(!left) left=0;
    if(!right) right=numberArray.length-1;
    var pivotIndex=right;
    pivotIndex=partition(numberArray,left,right-1,pivotIndex);
    if(left<pivotIndex-1)
    quickSort(numberArray,left,pivotIndex-1);
    if(pivotIndex+1<right)
    quickSort(numberArray,pivotIndex+1,right);
    return numberArray;
}
console.log(quickSort(numbers));
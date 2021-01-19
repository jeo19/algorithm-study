const numbers=[2,5,1,4,8,6,9,7,3,10];
const bubbleSort=(numberArray)=>{
    var length=numbers.length;
    var i,j,temp;
    for(i=0; i<length-1;i++){
        for(j=0;j<length-1-i;j++){
            if(numberArray[j]>numberArray[j+1]){
                temp=numberArray[j];
                numberArray[j]=numberArray[j+1];
                numberArray[j+1]=temp;
            }
        }
    }
    return numberArray;
}
console.log(bubbleSort(numbers));
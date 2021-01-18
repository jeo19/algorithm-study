const numbers=[5,4,8,6,3,1,5,8,9,7];
const selectionSort=(numberArray)=>{
    let length=numberArray.length;
    let minIndex,temp,i,j;
    for (i=0;i<length;i++){
        minIndex=i;
        for(j=i+1;j<length;j++){
            if(numberArray[j]<numberArray[minIndex]){
            minIndex=j;}
        }
         temp=numberArray[minIndex];
         numberArray[minIndex]=numberArray[i];
         numberArray[i]=temp;
    }
    return numberArray;
}
console.log(selectionSort(numbers));
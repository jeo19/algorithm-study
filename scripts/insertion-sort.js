const numbers=[9,2,5,7,1,6,8,10];
const insertionSort=(numberArray)=>{
    let i=1,j,temp;
    for(i;i<numberArray.length;i++){
        temp=numberArray[i];
        for(j=i-1;j>=0 && temp<numberArray[j];j--){
            numberArray[j+1]=numberArray[j];
        }
        numberArray[j+1]=temp;
    }
    return numberArray
}
console.log(insertionSort(numbers));

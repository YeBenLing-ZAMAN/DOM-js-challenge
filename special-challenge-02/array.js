




const deepArray = [5,7,8,[11,56,[20,26,29],18,15],1];




function findArray(arr){
    if(!Array.isArray(arr)){
        return ;
    }else {
        for(const element of arr){
            findArray(element);
            element.reverse();
        }
        
    }
}
const deepArrayReverse = findArray(deepArray);
console.log(deepArrayReverse)

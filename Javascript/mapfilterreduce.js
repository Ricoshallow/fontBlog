// reduce example
// 计算数组所有值的和
function arrSum(arr) {
    return arr.reduce((acc, item) => acc + item)
}
//累加对象数组里的值,需要指定累加器初始值
function objSum(arr){
    return arr.reduce((acc,item)=>acc + item.x,0)
}
// 二维数组转化为一维数组
function flatten(arr){
    return arr.reduce((acc,item)=>{
        return acc.concat(item)
    },[])
}
// 计算数组中每个元素出现的次数
function count(arr){
    return arr.reduce((acc,item)=>{
        if(acc.hasOwnProperty(item)){
            acc[item] +=1
        }else{
            acc[item] = 1
        }
        return acc
    },{})
}


let arr = [1,2,3,4,5,6]
let arr1 = [{x: 1}, {x:2}, {x:3}]
let arr2 = [[0, 1], [2, 3], [4, 5]]
let arr3 = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice','Bruce','Alice'];
console.log(arrSum(arr));
console.log(objSum(arr1));
console.log(flatten(arr2));
console.log(count(arr3));
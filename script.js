// const foo=function(){
//     setTimeout(function(){
//     console.log("foo")},1000)
// };
// const bar=function(){
//     setTimeout(function(){
//     console.log("bar");},2000)
//     foo();
// };
// const baz=function(){
//     setTimeout(function(){
//     console.log("baz");},3000)
//     bar();}
// baz()

console.log("Asyng") //проверка связи
//Промис
let Promis1=new Promise((resolve,regect)=>{
//Обещание брата сходить за хлебом
let n=Math.random() //рандомное число от 0.0000001-0.999999
if(n>0.5){
    resolve("Хлеб был куплен")//Успех
}else{
    regect("Хлеба нет")//Неудача
}})
let Promis2=new Promise((resolve, reject) => {//Обещание сестры порезать хлеб
    let n=Math.random()
    if(n>0.3){
        resolve("Хлеб порезан")
    }else{
        reject("Ужин без хлеба")
    }
})
Promis1
.then(bread=>{
    console.log(bread);
    return Promis2
})
.then(result=>{
    console.log(result)
})
.catch(err=>{
    console.log(err)
})
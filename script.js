const foo=function(){
    setTimeout(function(){
    console.log("foo")},1000)
};
const bar=function(){
    setTimeout(function(){
    console.log("bar");},2000)
    foo();
};
const baz=function(){
    setTimeout(function(){
    console.log("baz");},3000)
    bar();}
baz()
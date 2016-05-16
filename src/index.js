console.log('logging');
console.warn('warn');
console.info('info log');
console.error('error');
console.debug('debug');



var obj = {value:'one'}



console.log('%s is having lunch at %cGREAT DAY ','Alex','color:red; font-size: 55px;');
//%s %d %o %c color:red; font-size: 44px;
 
for (var i=0;i<20;i++){
  console.log('value ',i);
}
console.group('Important');
console.log('value ',21);
console.log('value ',22);
console.groupEnd();
for (;i<40;i++){
  console.log('value ',i);
}

for (var i=0;i<100;i++){
  var value = Math.random()*100;
  if(value<50){
    console.count('less than 50');
  }else{
    console.count('greater than 50');
  }
}
console.time('Generating random numbers');
var list = []; 
for (var i=0;i<10000;i++){
  var value = Math.random()*100;
  list.push(value);
}
console.timeEnd('Generating random numbers');

var u1 = new Unit('1','Unit1');
var u2 = new Unit('2','Unit2');
var u3 = new Unit('3','Unit3');
var u4 = new Unit('4','Unit4');

var data = [u1,u2,u3,u4];

console.table(data);




//formatters
//%s %d %o %c color:red; font-size: 44px;

// console.group('logging group');
// console.log('level1');
// console.group('level2');
// console.log('value');
// conslee.groupEnd();
// console.groupEnd(); 



// function Unit (id,name) {
//   this.name=name;
//   this.id=id;
// }


// var u1 = new Unit('1','Unit1');
// var u2 = new Unit('2','Unit2');
// var u3 = new Unit('3','Unit3');
// var u4 = new Unit('4','Unit4');

// var data = [u1,u2,u3,u4];

// console.time('test time');
// var data =[];
// for(var i; i< 100000000000 ;i++)
// data.push({num:i});
// console.timeEnd('test time');

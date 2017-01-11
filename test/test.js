var memory = require('../lib/memory');

var flash = memory();

flash.add('fu.bx', 1);

flash.get('fu.bx');
//get all data that belong to module of 'fu'.
flash.get('fu');
//get all data in flash.
flash.get('*');

/*
console.log('%j', flash.get('fu.bx'));  // 1
console.log('%j', flash.get('fu'));     // {"bx":1}
console.log('%j', flash.get('*'));      //{"fu":{"bx":1}}
*/
//
flash.add('fu.let.val1', 'v1');
flash.add('fu.let.val2', 'v2');
flash.add('fu.cx.dfdf', '0232k');

//下面2行输出是一样的,他们相等.
console.log('%j', memory());
console.log('%j', flash);

// 给获取的数据对象 附上闪存对象的方法.
let cc = memory().get('fu.let');
let fcc = flash.cc(cc);
let vals = fcc.get('*');

//销毁内存中的模块对象.
flash.del('fu.let');
console.log('%j', memory().cc(cc).get('bx'));




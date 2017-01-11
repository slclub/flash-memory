 var memory = require('../lib/memory');

 var flash = memory();
 flash.add('fu.bx', 1);
 flash.add('fu.let.bx', 'df');
 flash.add('fu.let.xcc', '23');
 flash.add('fu.cx.dfdf', '0232k');
 console.log('%j', memory());
 console.log(memory().get('fu.let'));
 flash.del('fu.let', 'dfdf');
 console.log('%j', memory());




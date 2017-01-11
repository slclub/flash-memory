 var memory = require('../lib/memory');

 var flash = memory();
 flash.add('fu.bx', 1);
 flash.add('fu.let.bx', 'df');
 flash.add('fu.let.xcc', '23');
 flash.add('fu.cx.dfdf', '0232k');
 console.log('%j', memory());
 let cc = memory().get('fu.let');
 console.log(cc);
 flash.del('fu.let', 'dfdf');
 console.log('%j', memory().cc(cc).get('bx'));




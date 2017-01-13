# flash-memory
The simplest flash can use any project. 

它是一个全局对象,主要管理主线程内使用的数据。如配置文件，登录用户的详细信息（一般不会放在session内的）。使用它的好处就是只用从系统资源里取一次其它时候使用都是直接从内存中直接取。

# Installation

    npm install flash-memory
    
# Usage
    
    var memory = require('../lib/memory');

    var flash = memory(false/true);

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

    // 给获取的数据对象 附上闪存对象的方法.
    let cc = flash.get('fu.let');
    let fcc = flash.cc(cc);
    let vals = fcc.get('*');

    //销毁内存中的模块对象.
    flash.del('fu.let');
    console.log('%j', flash.cc(cc).get('bx'));
 
# API
以下api参数

key: 字符串类型(String) 可以用"."来分隔表示模块对象。

    var memory = require('flash-memory');
    var flash = memory(false/true);
    //false : 禁用全局单例
    //true:启用全局单例.

### get(key [, defaultValue = false)
获取key对应的闪存内的值，如果找不到 用defaultValue替换，以免出现 define, Nan,Null 等特殊值.

### add(key, value)
    key 设置的键要是按模块去划分;请用逗号分隔
    key = 'config.host';
    
    value 键对应的值
### mutiladd(obj)

obj:对象类型({}) ,普通对象按键值分模块放入内存中
 
### mutiladd(obj)
按obj对象的键名自动添加
### del(key)
从内存中将该模块的数据销毁.
### cc(obj = {})
转换普通数据为闪存对象 只是使用flash的方法。
### clear()
清除

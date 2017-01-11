# flash-memory
The simplest flash can use any project.

# Usage
    
    npm install flash-memory
 
# API

## get(key [, defaultValue = false)
获取key对应的闪存内的值，如果找不到 用defaultValue替换，以免出现 define, Nan,Null 等特殊值.

## add(key, value)
    key 设置的键要是按模块去划分;请用逗号分隔
    key = 'config.host';
    
    value 键对应的值
## mutiladd(obj)
按obj对象的键名自动添加
## del(key)
## cc(obj = {})
转换普通数据为闪存对象 只是使用flash的方法。

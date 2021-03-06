## jQuery
### jQuery有什么特点？
1. 轻量级30kb
2. DOM操作封装
    - ```append()```方法向匹配的元素内部追加内容
    - ```after()```方法向匹配的元素后面添加元素，新添加的元素做为目标元素后的紧邻的兄弟元素
    - ```empty()```方法严格来讲并不是删除元素，该方法只是清空节点，它能清空元素中的所有子节点
    - ```css()```方法用于获取、设置元素的一个或多个属性
3. 链式操作，隐式迭代
    -  ```$("#nav").eq(index).show().siblings().hide();```导航栏切换
4. 插件
    - jsGrid
### $(document).ready()方法和window.onload有什么区别？
- ```window.onload```方法是在网页中所有的元素(包括元素的所有关联文件)完全加载到浏览器后才执行的。
- ```$(document).ready()``` 方法可以在DOM载入就绪时就对其进行操纵，并调用执行绑定的函数。```$(document).ready()```等同于```$(function(){})```

## 了解js垃圾回收机制吗？

- 引用计数垃圾收集

    此算法把“对象是否不再需要”简化定义为“**对象有没有其他对象引用到它**”。如果没有引用指向该对象（零引用），对象将被垃圾回收机制回收。

    这是最初级的垃圾收集算法，该算法有个限制：无法处理循环引用的事例
- 标记-清除算法

    这个算法把“对象是否不再需要”简化定义为“**对象是否可以获得**”。

    这个算法假定设置一个叫做根（root）的对象（在Javascript里，根是全局对象）。**垃圾回收器将定期从根开始，找所有从根开始引用的对象，然后找这些对象引用的对象**……从根开始，垃圾回收器将找到所有可以获得的对象和收集所有不能获得的对象。

## js继承有哪些方式？

- 构造函数式继承
- 原型链式继承
- 组合式继承
- 寄生式继承
- 寄生组合式继承

## DOM API

## 用过map，filter，reduce吗？
三个方法都不会改变原数组，结果返回一个新变量。

- Map：将一个数组中的每一项做个转换，结果生成了一个新数组，并且新数组的长度和原数组一致。

```let newArr = arr.map(function(item,index,arr){//return item for newArr})```
- Filter：将一个数组做一个过滤，按照某规则提取出一些特定的项来，结果也生成了一个新数组，但新数组的长度小于或等于原数组。

```let newArr = arr.filter(function(item,index,arr){//return ture for newArr else filter})```
- Reduce：通过遍历一个数组的每一项来计算出一个新东西，最后生成的结果可以是任何类型的变量：一个新数组，一个新对象，一个新布尔值

```let newobj = arr.filter(function(accumulator,item,index,arr){//return accumulator result},initAccumulator)```


## JavaScript语言精粹
- 你有权力定义自己的子集。你完全可以基于精华的那部分去编写更好的程序
- 所谓编程，就是将一组需求分解成一组**函数**与**数据结构**的技能
### 语法
- NaN是一个数值，他表示一个不能产生正常结果的运算结果。NaN不等于任何值，包括它自己，可以用```isNaN()```检测NaN。
- 如果第一个运算数的值为真 && 产生第二个运算数的值 && 可以用来避免错误 ```flight.equipment && flight.equipment.model```
- 如果第一个运算数的值为假 || 产生第二个运算数的值 || 可以用来设置默认值 ```let middle = stooge.middleName || 'none'```
### 函数
- 调用模式：
方法调用模式
函数调用模式
构造器调用模式
apply调用模式

## display: none; 与 visibility: hidden; 的区别（opacity）？
联系：它们都能让元素不可⻅

区别：

- ```display:none``` 会让元素完全从渲染树中消失，渲染的时候不占据任何空间；```visibility: hidden ```不会让元素从渲染树消失，渲染时元素继续占据空间，只是内容不可⻅。 

- 修改常规流中元素的 display 通常会造成⽂档重排。修改 visibility 属性只会造成本元素的重绘。

- ```opacity：0``` 会将元素设置为透明，但是其位置也在页面文档流中，不会被删除


## 什么是BFC？如何创建？BFC有什么用？

概念： 

BFC 即 Block Formatting Contexts (块级格式化上下文)，它是一个独立的渲染区域，容器里面的元素不会在布局上影响到外面的元素。

创建：

- body 根元素
- 浮动元素：float 除 none 以外的值
- 绝对定位元素：position (absolute、fixed)
- display 为 inline-block、table-cells、flex
- overflow 除了 visible 以外的值 (hidden、auto、scroll)

作用：

- 解决外边距塌陷问题

- 清除浮动（清除浮动主要为了解决父级元素因为子级浮动引起内部高度为0 的问题。清除浮动之后， 父级就会根据浮动的子盒子自动检测高度。父级有了高度，就不会影响下面的标准流了）


## CSS层叠优先级？
- 优先级就近原则，同权重情况下样式定义最近者为准 
- 载⼊样式以最后载⼊的定位为准 
- 优先级为: !important > 内联 > id > class > tag ; 

## 了解盒模型吗？
概念：

CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括： 外边距（margin） 、 边框 （border） 、 内边距（padding） 、 实际内容（content） 四个属性。 CSS盒模型有两种：标准模型 / IE模型
- 标准盒子模型(默认)：宽度=内容宽度（content）+ border + padding 

- 低版本IE盒子模型：宽度=内容宽度（content+border+padding） ```border-sizing : border-box```

## css中的相对单位有哪些？

- ```vw``` : 1vw 等于视口宽度的1%
- ```vh``` : 1vh 等于视口高度的1%
- ```em``` : 相对于其父元素的字体大小,一般都是以body的“font-size”为基准。
- ```Rem``` : 相对于根元素html的字体大小。

## flex是哪三个属性的缩写？flex:1 和 flex:auto是什么？

- ```flex-grow``` : 可拉伸  ```flex-shrink``` : 可收缩  ```flex-basis``` : 宽度。 默认为  ```flex: 0 1 auto```
- ```flex:1``` : 等同于 ```flex: 1 1 0``` 平分
- ```flex:auto``` : 等同于 ```flex: 1 1 auto``` 按内容分


## 垂直居中有哪些方式？<a href="https://github.com/Ricoshallow/fontBlog/CSS/verticalCenter.html" title="verticalCenter">verticalCenter.html</a>

块级元素：
1. 绝对定位```top:50%``` -- 需要知道被居中块级元素的尺寸  
2. 绝对定位结合```margin:auto``` 并将top和bottom 设置为相等值 
3. 设置父盒子高度为0，使用padding撑大盒子 
4. flex布局 ```align-items: center```

文本：

1. 使用```line-height```使单行文本垂直居中
2. 使用 ```display：table-cell``` 和 ```vertical-align``` 对容器里的多行文字进行垂直居中


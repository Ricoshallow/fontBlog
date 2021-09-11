## HTML5 的新特性有哪些？

1. 语义化更好的内容标签: header/footer/article

2. HTML5 拥有多个新的表单输入类型: color/tel/email/url/number

3. 本地存储: localStorage/sessionStorage

## Doctype作用？标准（严格）模式与兼容（混杂）模式各有什么区别?
1. <!DOCTYPE>声明位于HTML文档中的第一行，处于 html 标签之前。告知浏览器的解析器用什么标准解析文档。DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现
2. 标准模式的排版和JS运作模式都是以该浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示,模拟老式浏览器的行为以防止站点无法工作。

## 简述⼀下src与href的区别？
1. src ⽤于替换当前元素，href⽤于在当前⽂档和引⽤资源之间确⽴联系。
2. src 是 source 的缩写，指向外部资源的位置，指向的内容将会嵌⼊到⽂档中当前标签所在位置； 当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执⾏完毕，这也是为什么将js脚本放在底部⽽不是头部
3. href 是 Hypertext Reference 的缩写，指向⽹络资源所在位置，建⽴和当前元素或当前⽂
档（链接）之间的链接，浏览器解析到该元素时会并⾏下载资源并且不会停⽌对当前⽂档的处理。

## script标签中defer和async有什么区别？

联系：

这两个属性可以防止script标签造成的渲染阻塞（解析渲染 DOM）

区别：

- async: 加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行（异步）。
- defer: 加载后续文档元素的过程将和 script.js 的加载并行进行（异步），script.js 的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成。
![deferandasync](../images/deferandasync.png)


## 什么是HTML5离线存储？
概念：

对web 应用进行缓存，使其在没有因特网连接时也可以进行访问

实现：

在页面头部html标签中添加manifest属性
```html
<!DOCTYPE HTML><html manifest = "demo.appcache">
...</html>
```
demo.appcache文件的书写方式
```
CACHE MANIFEST
js/app.js
css/style.css

NETWORK:
resourse/logo.png

FALLBACK:
offline.html
```
- ```CACHE MANIFEST``` - 在此标题下列出的文件将在首次下载后进行缓存
- ```NETWORK``` - 在此标题下列出的文件需要与服务器的连接，且不会被缓存
- ```FALLBACK``` - 在此标题下列出的文件规定当页面无法访问时的回退页面（比- 如 404 页面）
    
## cookies，sessionStorage 和 localStorage 的区别？

- 行为：

    ```cookie```是网站为了标示用户身份，记录用户行为而储存在用户本地终端上的数据，会在浏览器和服务器间来回传递。
    ```sessionStorage```和```localStorage```不会自动把数据发给服务器，仅在本地保存。

- 存储大小：

  ```cookie```数据大小不能超过4k。
  ```sessionStorage```和```localStorage``` 也有存储大小的限制但比```cookie```大得多，可以达到5M或更大。
- 有效时间：

  ```localStorage``` 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据；

  ```sessionStorage```  数据在当前浏览器窗口关闭后自动删除。
  
  ```cookie```   设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭
# 桌面端唤起逻辑


## 旺旺唤起

打开链接的方式只有3种：
1、window.open
只要有窗口的名称和window.open中第二个参数中的一样就会将这个窗口替换，用这个特性的话可以在iframe和frame中来代替location.href。

2、location.href
"top.location.href"是最外层的页面跳转
"window.location.href"、"location.href"是本页面跳转
"parent.location.href"是上一层页面跳转.

3、a标签

打开链接的形势只有3种：
1、在原窗口打开
2、打开新的窗口
3、指定窗口打开

打开窗口的异常：
1、浏览器拦截弹出窗口
2、浏览器不支持打开协议，一般http/https协议都支持的，但是会遇到自定义协议

⚠️ 注意点： 以上的信息虽然在不同浏览器中大致行为是一致的，但在其中一些会表现出不同，因此需要把主流的浏览器内核都测试一遍


## 总结

1、window.open 打开新窗口， 可能会被拦截，可以使用 `setTimeout(`window.open(aliim:);`, 50);` 防止拦截
2、location.href 在本窗口打开 
3、可以使用 a 标签模拟 click事件，打开新的窗口
****** 4、不要在 控制台测试这些方法，不准


https://juejin.cn/post/6844904071355187208
https://www.cnblogs.com/Qian123/p/5345298.html

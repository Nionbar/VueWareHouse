---

---

#笔记


## mixin(混入)
    功能：可以把多个组件共用的配置提取成一个混入对象
    使用方法：
        第一步定义混入，例如：
            {
                data(){.......},
                methods:{.......},
                ......    
            }
        第二步使用混入，例如:
            (1).全局混入：Vue.mixin(xxx)
            (2).局部混入：mixins['xxx']


## plugins(插件)
    功能：用于增强Vue
    本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者的数据
    定义插件：
        对象.install = function(Vue,opthins){
            //1.添加全局过滤器
            //2.添加全局混入
            //3.添加全局指令
            //4.添加实例方法
            Vue.prototype.$myProperty = xxx
        }
    使用插件：Vue.use()


## scoped样式
    作用：让样式在局部生效，防止冲突
    写法：<style scoped></style>


## 总结TodoList案例
```
1.组件化编程流程：

​    (1).拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突
​    (2).实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：
​        1).一个组件在用：放在组件自身即可
​        2).一些组件在用：放在他们共同的父组件身上
​    (3).实现交互：从绑定事件开始

2.props适用于：
    (1).父组件==>子组件 通信
    (2).子组件==>父组件 通信(要求父先给子一个函数)

3.使用v-model时要切记：v-model绑定的值不能是props传来的值，因为props是不可以修改的！

4.props传过来的若是对象类型的值，修改对象内的属性值Vue不会报错，但不推荐使用。
```


## WebStrorage
    (1).存储内容大小一般在5MB左右（不同浏览器可能不相同）
    (2).浏览器端通过Window.sessionStorage和Window.localStorage属性实现本地存储机制
    (3).相关API
        1) xxxxxStorage.setItem('key','value')
            接收一个Key,Value值，添加到存储中。如果Key值已经存在那么将替换其Value值
        2) xxxxxStorage.getItem('key')
            接收一个Key值，获得存储中该Key值的Value值，若不存在则返回null
        3) xxxxxStorage.deleteItem('key')
            接收一个Key值，在存储中删除该值
        4) xxxxxStorage.clear()
            清除储存中的所有数据
    (4).备注:
        1) SessionStorage存储的内容会随浏览器的关闭而消失
        2) LocalStorage存储的内容，需要手动清除才会消失
        3) xxxxxStorage.getItem(xxx)如果对应的Value值获取不到，name返回null值
        4) JSON.parse(null)的结果依旧是null


## 组件的自定义事件
    (1).一种组件间通信的方式，适用于：<span style="color:red">子组件==>父组件</span>
    (2).使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件(事件回调在A中)
    (3).绑定自定义事件
        1).第一种方式，在父组件中：<Demo @atguigu="test"/>或<Demo v-on:atguigu="test"/>
        2).第二种方法, 在父组件中:
            <Demo ref="demo">
            ......
            mounted(){
                this.$refs.xxx.$on('atguigu',this.test)
            }
        3).若想让自定义事件只触发一次，可以用once修饰符，或$once方法
    (4).触发自定义事件：this.$emit('atguigu',数据)
    (5).解绑自定义事件：this.$off('atguigu')
    (6).组件上也可绑定原生DOM事件，需要使用native修饰符
    (7).注意：通过this.$refs.xxx.$on('atguigu',回调)绑定自定义事件时，回调要么配置在methods中，要么用箭头函数。否则this指向VC

## 全局事件总线（GlobalEventBus）
(1).一种组件间通信的方式，适用于**任意组件通信**
(2).安装全局总线：						

```
new Vue({
    ......
    beforeCreate(){
        Vue.prototype.$bus = this //安装全局事件总线
    }
    render:h=>h(App)
    ......
})
```

(3).使用全局总线：
    ```js
    methods(){
        demo(data){......}
    }
    ......
    mounted(){
        this.$bus.$on('port',this.demo)
    }
    ```

(4).最好在beforeDestroy钩子中，用$off去解绑当前组件所用到的事件





## 消息订阅与发布

1.一种组件间通信的方式，适用于<span style="color:red">任意组件通信</span>

2.使用步骤

​			1.安装pubsub:`npm i pubsub-js`

​			2.引入:`import pubsub from 'pubsub-js'`

​			3.接收数据:A组件想收数据，则A在组件中订阅消息，订阅的<span style="color:red">回调留在A组件自身</span>

```
        methods(){
            demo(data){......}
        }
        ......
        mounted(){
            this.pubId = pubsub.subscribe('xxx',this.demo) 
        }
```

​			4.提供数据：`pubsub.publish('xxx',数据)`

​			5.最好在beforeDestory钩子中，用pubsub.unsubscribe(pubID)去<span style="color:red">取消订阅</span>

## nextTick

​	1.语法：`this.$nextTick(回调函数)`

​	2.作用：在下一次DOM更新结束后执行指定的回调

​	3.触发时机：当数据发生改变后，要基于更新后的新DOM进行某些操作时，要在nextTick所在的回调函数中执行

## Vue封装的过度与动画

​	1.作用：在插入、更新或移除DOM元素时，在合适的时候给元素添加样式类名

​	2.图示：

​		![](E:\xitong\桌面\Vue封装动画.png)

​	3.写法：

​		(1).准备好样式：

​			 	1）.元素进入的样式

​	   				 1.v-enter：进入的起点

​						2.v-enter-active：进入的过程中

​						3.v-enter-to：进入的终点

​				2）.元素离开的样式

​						 1.v-leave：离开的起点

​			 			2.v-leave-active：离开的过程中

​				 		3.v-leave-to：离开的终点

​		(2)使用`<stransition>`包裹过度的元素，并配置name属性：

```html
	<stransition>
        <h1 v-show="isShow">
            你好啊
        </h1>
	</stransition>
```

​		(3)备注：若有多个元素需要过度，则需要使用`<stransition-group>`，且每个元素都要指定`key`值

## Vue脚手架配置代理

#### 	方法一

​			在vue.config.js中添加如下配置

```js
		devServer: {
            proxy: 'http://localhost:5000'
        }
```

​		说明：

​				1.优点：配置简单，请求资源直接发给前端（8080）即可

​				2.缺点：不能配置多个代理，不能灵活控制是否走代理

​				3.工作方式：若按照上诉配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器（优先匹配前端资源）



#### 	方式二

​			编写vue.config.js配置代理规则

```js
		devServer: {
            proxy: {
            '/apiStudent': {
                target: 'http://localhost:5000',
                pathRewrite:{'^/apiStudent':''},
                ws: true,//用于支持websocket
                changeOrigin: true//用于请求头中的host值
            },
            '/apiCar': {
                target: 'http://localhost:5001',
                pathRewrite:{'^/apiCar':''},
                ws: true,//用于支持websocket
                changeOrigin: true//用于请求头中的host值
            }
            }
        }
```

​			说明：

​					1.优点：可以配置多个代理，且可以灵活控制是否走代理

​					2.缺点：配置略微繁琐，请求资源时必须加前缀

export default{
    install(Vue){
        //定义混入
         Vue.mixin({
             data(){
                 return{
                    a:100,
                    b:200
                 }
             },
             methods: {
                 showMsg(){
                     console.log('@@showMsg')
                 }
             }
         })

    }
}
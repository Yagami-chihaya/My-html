export default {
    template:`
        <div>
            <h2>vue打包的推荐写法</h2>
            <button @click='btnClick'>click Me!</button>
        </div>
    `,
    data(){
        return {
            message:'hello'
        }
    },
    methods:{
        btnClick(){
            console.log('我被点了~~');
        }
    }
}
// 宣言的レンダリング
//宣言的にDOMを描画するシステム
let app = new Vue({
    el: '#app',
    delimiters: ["[[", "]]"],
    data: {
        message: 'Hello Vue!'
    }
})

let example = new Vue({
    el: '#example',
    delimiters: ["[[", "]]"],
    data: {
        message: 'Hello TK!'
    }
})

let app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

// 条件分岐
let app3 = new Vue({
    el: '#app-3',
    data: {
        seen: false
    }
})

//ループ
let app4 = new Vue({
    el: '#app-4',
    delimiters: ["[[", "]]"],
    data: {
        todos: [
            {text: 'Learn JavaScript'},
            {text: 'Learn Vue'},
            {text: 'Build something awesome'}
        ]
    }
})

//ユーザ入力の制御
let app5 = new Vue({
    el: '#app-5',
    delimiters: ["[[", "]]"],
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
})
let app6 = new Vue({
    el: '#app-6',
    delimiters: ["[[", "]]"],
    data: {
        message: 'Hello Vue!'
    }
})

Vue.component('todo-item',{
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
})

let app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            {id: 0, text: 'Vegetables'},
            {id: 1, text: 'Cheese'},
            {id: 2, text: 'Whatever else humans are supposed to eat'}
        ]
    }
})

// データとメソッド////////////////
let obj = {
    foo: 'bar'
}
Object.freeze(obj)

new Vue({
    el:'#obj',
    delimiters: ["[[", "]]"],
    data: obj
})


let data = {a: 1}
let vm = new Vue({
    el: '#example',
    data: data
})

// data, elはインスタンスのプロパティ
vm.$data === data // => true
vm.$el === document.getElementById('example') // => true
// $watchはインスタンスメソッド
vm.$watch('a', function(newValue, oldValue){
    //このコールバックは'vm.a'の値が変わるときに呼ばれる
})
///////////////////////////////////////////

//インスタンスライフサイクルフック
let lifecycle = new Vue({
    el: '#lifecycle',
    delimiters: ["[[", "]]"],
    data: {
        a: 1
    },
    created: function(){
        // 'this'はvmインスタンスを指す
        console.log('a is: ' + this.a)
    }
})
let app = new Vue({
    el: '#app',
    delimiters: ["[[", "]]"],
    data: {
        msg: 'Hello Vue!'
    }
})

//算出プロパティはリアクティブな依存関係に基づきキャッシュされる
//methodsは毎回実行するのに対して, 
//computedはmessageが変わらない限り，以前計算された結果を即時に返す
let vm = new Vue({
    el: '#example',
    delimiters: ["[[", "]]"],
    data: {
        message: 'ABCDEFG'
    },
    computed: {
        reversedMessage: function(){
            return this.message.split('').reverse('').join('')
        }
    }
})

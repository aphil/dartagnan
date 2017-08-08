require.config({
    paths: {
        text: '/lib/text/text',
        vue: '/lib/vue/dist/vue',
        vuex: '/lib/vuex/dist/vuex',
        valuedDartModel: '/js/valuedDartModel',
        store: '/js/store/store'
    }
})

requirejs(['vue', 'store', '/js/target.js'], function (Vue, store) {
    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!'
        },
        store: store
    });
});
require.config({
    paths: {
        text: '/lib/text/text',
        vue: '/lib/vue/dist/vue',
        vuex: '/lib/vuex/dist/vuex',
        valuedDartModel: '/js/models/valuedDartModel',
        store: '/js/store/store'
    }
})

requirejs(['vue', 'store', '/js/components/target.js', '/js/components/dartsOnBoard.js'], function (Vue, store) {
    var app = new Vue({
        el: '#app',
        store: store
    });
});
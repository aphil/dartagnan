define(['vue', 'text!/home/target', 'store', 'valuedDartModel'], function (Vue, html, store, valuedDartModel) {
    Vue.component('target-component', {
        template: html,
        data: function () {
            return {
                darts: []
            };
        },
        methods: {
            addDartToBoard: function (dartValue) {
                store.dispatch('addDartToBoard', new valuedDartModel(dartValue));
            },
            removeDartFromBoard: function (dartValue) {
                var indexOfKey = this.darts.indexOf(dartValue);
                if (indexOfKey >= 0) {
                    this.darts.splice(indexOfKey, 1);
                } else {
                    throw "Le dart " + dartValue + " n'est pas dans la liste"
                }
            }
        }
    });
})
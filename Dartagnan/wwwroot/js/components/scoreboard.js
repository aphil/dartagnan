define(['vue', 'text!/home/scoreboard', 'store'], function (Vue, html, store) {
    Vue.component('scoreboard-component', {
        template: html,
        computed: {
            darts: function () {
                return store.state.dartsOnBoard;
            }
        },
        methods: {
            removeDartFromBoard: function (dart) {
                store.dispatch('removeDartFromBoard', dart);
            },
            getDisplayText: function (dart) {
                var text = "";
                if (dart.getMultiplier() == 2) {
                    text += "Double ";
                } else if (dart.getMultiplier() == 3) {
                    text += "Triple ";
                }

                text += dart.getValueWithoutMultiplier();
                return text;
            }
        }
    });
})
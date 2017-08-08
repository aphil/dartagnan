define(['vue', 'vuex'], function (Vue, Vuex) {
    Vue.use(Vuex)

    // root state object.
    // each Vuex instance is just a single state tree.
    var state = {
        dartsOnBoard: []
    };

    // mutations are operations that actually mutates the state.
    // each mutation handler gets the entire state tree as the
    // first argument, followed by additional payload arguments.
    // mutations must be synchronous and can be recorded by plugins
    // for debugging purposes.
    var mutations = {
        addDartToBoard(state, dart) {
            state.dartsOnBoard.push(dart);
        },
        removeDartFromBoard(state, dart) {
            // todo
        }
    };

    // actions are functions that cause side effects and can involve
    // asynchronous operations.
    var actions = {
        addDartToBoard: function (store, dart) { store.commit('addDartToBoard', dart); }
    };

    // getters are functions
    var getters = {
        dartsOnBoard: function (state) { return state.dartsOnBoard; }
    };

    // A Vuex instance is created by combining the state, mutations, actions,
    // and getters.
    return new Vuex.Store({
        state,
        getters,
        actions,
        mutations
    });
});
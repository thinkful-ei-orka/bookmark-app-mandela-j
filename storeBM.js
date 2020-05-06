'use strict';

const store = {
    bookmarks : [],
    addMode: false,
    filterMode: false,
    errorBank: {
        errorOn: false,
        errorJson:{}
    }
}

function toggleAddMode() {
    if (store.filterMode === true) {
        store.filterMode = !store.filterMode;
        store.addMode = !store.addMode;
    }
    else {store.addMode = !store.addMode};
}

function toggleFilterMode() {
    if (store.addMode === true) {
        store.addMode = !store.addMode;
        store.filterMode = !store.filterMode;
    }
    else {store.filterMode = !store.filterMode;}
}



export default {
    store,
    toggleAddMode,
    toggleFilterMode
}
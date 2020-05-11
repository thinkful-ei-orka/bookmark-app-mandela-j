'use strict';

const store = {
    bookmarks : [],
    // addMode: false,
    filterMode: false,
    errorFound: false,
    errorMessage: `Rating Required, Title Required <br>Address must begin with http:// or https://`

    }



function toggleAddMode() {
    if (store.filterMode === true) {
        store.filterMode = !store.filterMode;
        store.addMode = !store.addMode;
    }
    else {store.addMode = !store.addMode;}
}

function toggleExpand(id) {
    // function sameId (here) {return here.id === id}
    let toExpand = store.bookmarks[store.bookmarks.findIndex(e => e.id === id)]
    // console.log(toExpand);
    toExpand.expanded = !toExpand.expanded;
    // console.log(toExpand) ;
}

// function toggleFilterMode() {
//     if (store.addMode === true) {
//         store.addMode = !store.addMode;
//         store.filterMode = !store.filterMode;
//     }
//     else {store.filterMode = !store.filterMode;}
// }



export default {
    store,
    toggleAddMode,
    toggleExpand
    // toggleFilterMode
}
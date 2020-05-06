'use strict';

import store from './storeBM.js';
import api from './api.js';

function render() {
    if (store.addMode === false) {

    }

    if (store.filtermode === false) {

    }
}

function toggleAddBookmark() {
    $('.add-bookmark-expand-button').click(e => {
        event.preventDefault();
        store.toggleAddmode();
        console.log('add bookmark expanded/collapsed');
        // turn store.addMode true
        store.toggleAddMode();
        // expand to show add bookmark form
            //adding expand class
        // toggle change bookmark expand plus to minus

        //render()
    });
}

function filterByRating() {
    $('.filter-bookmarks-button').click(e => {
        event.preventDefault();
        store.toggleFilterMode();
        //console.log('filtering expanded/collapsed');
        console.log(store.store.filterMode);

        //render()
    })
}

function addBookmarkButton() {
    $('.add-bookmark-button').on('submit', e => {
        // why does this not prevent from submitting form/refreshing page?
        event.preventDefault();
        console.log('button press')

        // validate form entry** confirm how
        // add form information to store
        // post method api call to server
        // render()
    })
    //
}

function expandBookmark() {

}


function deleteBookmark() {

}


function bookmarkGo() {
    
// expand to add-bookmarkform
toggleAddBookmark();

// add-bookmark 
addBookmarkButton();
// filter bookmarks
filterByRating();
// expand bookmark
// delete bookmark
// show error
//render()
}

$(bookmarkGo);
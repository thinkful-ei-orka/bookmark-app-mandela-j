'use strict';

import store from './storeBM.js';
import api from './api.js';

// HTML Templates here
 

function render() {
    // api.grabBookmarks();

    if (store.addMode === false) {

    }

    if (store.filtermode === false) {

    }
}

function toggleAddBookmark() {
    $('.add-bookmark-expand-button').click(e => {
        event.preventDefault();
        store.toggleAddMode();
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
    $('.add-bookmark-button').click('submit', e => {
        // why does this not prevent from submitting form/refreshing page?
        event.preventDefault();
        console.log('button press')
        // const title = $('#js-add-bookmark-title').val();
        // const rating = $('#js-site-rating').val();
        // const url = $('#js-add-bookmark-url').val();
        // const desc = $('#js-add-bookmark-description-').val();
        // validate form entry** confirm how
        // add form information to store
        // post method api call to server
        // console.log(title, rating, url, desc);
        // api.makeBookmark(title, url, desc, rating);
        // api.makeBookmark(title, rating, url, desc)
        // render()
    })
    //
}

function expandBookmark() {

}


function deleteBookmark() {
    //figure why this isn't working
    $('.bookmark-stack').on('click','.bookmark-div .', e => {
    event.preventDefault();
    console.log('delet button press');
    // grab id from where clicked
    // api.deleteBookmark(id)
    // delete bookmark in store
    // render()
    })
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
render()
}

$(bookmarkGo);
'use strict';

import store from './storeBM.js';
import api from './api.js';


// HTML Templates here

function ratingConverter(number) {
   if (number === 1) {
       return '&#9733; &#9734; &#9734; &#9734; &#9734;'}

   if (number === 2) {
    return '&#9733; &#9733; &#9734; &#9734; &#9734;'}


if (number === 3) {
    return '&#9733; &#9733; &#9733; &#9734; &#9734;'}


if (number === 4) {
    return '&#9733; &#9733; &#9733; &#9733; &#9734;'}


if (number === 5) {
    return '&#9733; &#9733; &#9733; &#9733; &#9733;'}
}

function bookmarkDiv(i) {
    const storeOb = store.store.bookmarks[i]
return`<div class="bookmark-div contentShow" id="${storeOb.id}">
            <div class="title-div">
             <button class="title-rating-bookmark btn-l" id="${storeOb.id}"> ${storeOb.title} ${ratingConverter(storeOb.rating)}     
             </button>
           <button class="btn"><i class="fa fa-trash" id="${storeOb.id}"></i></button>
          </div>
          <div class="expanded-bookmark content">
             <p class="URL">${storeOb.url}</p>
             <p class="description">${storeOb.desc}</p>
             <a href="${storeOb.url}" target="_blank"><button class="visit-site-button">Visit Site</button></a>
           </div>
        </div>
 `
}


function render() {
    let bigBooks = []
    const newstack = store.store.bookmarks;


    if (store.store.filterMode === false || store.store.filterMode === 0) {        newstack.forEach(function(bookmark,index){
        bigBooks.push(bookmarkDiv(index));
        });
    }

    else {
        console.log(`1`)
        function forfilter(i) {
            const storeOb = store.store.bookmarks[i]
            return storeOb.rating >=store.store.filterMode;
            }
        newstack.forEach(function(bookmark,index){
            bigBooks.push(bookmarkDiv(index));
        });
        
    }
$('.bookmark-stack').html(bigBooks.join(''))
// expandBookmark();
// deleteBookmark();
}

function toggleAddBookmark() {
    $('.add-bookmark-expand-button').click(e => {
        e.preventDefault();
        store.toggleAddMode();
        $('.add-filter-forms').toggleClass("content");
        $('.add-filter-forms').toggleClass("contentShow");
        render()
    });
}

function filterByRating() {
    $('.js-filter-bookmarks-select').change(e => {
        e.preventDefault();
        store.store.filterMode = $('.js-filter-bookmarks-select').val();
        console.log(store.store.filterMode)
        api.grabBookmarks();
        render()
    })
}

function addBookmarkButton() {
    $('.add-bookmark-button').click('submit', e => {
        e.preventDefault();
        const title = $('.title-input').val();
        const rating = $('.rating-input').val();
        const url = $('.url-input').val();
        const desc = $('.description-input').val();
        // validate form entry** confirm how
        // add form information to store
        api.makeBookmark(title, url, desc, rating);
        api.grabBookmarks();
        render()
    })
}

function expandBookmark() {
    $('.bookmark-stack').on('click', '.title-rating-bookmark', e => {
        e.preventDefault();
        const id = $(e.target).attr("id");
        console.log(e.target)
        $(`#${id} div.expanded-bookmark`).toggleClass("content","contentShow");
      })
}


function deleteBookmark() {
    $('.bookmark-stack').on('click','.btn .fa', e => {
    e.preventDefault();
    const id = $(e.target).attr("id");
    api.deleteBookmark(id);
    api.grabBookmarks();
    })
}

function bookmarkGo() {
api.grabBookmarks();

render();
// set event listeners
toggleAddBookmark();
addBookmarkButton();
// filter bookmarks
filterByRating();
// expand bookmark
expandBookmark();

deleteBookmark();

// show error
}

$(bookmarkGo);

export default{
    render
}
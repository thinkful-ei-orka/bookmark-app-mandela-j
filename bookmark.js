'use strict';

import store from './storeBM.js';
import api from './api.js';


// HTML Templates here

function ratingConverter(number) {
    console.log(store.store.bookmarks[number].rating)
    switch (store.store.bookmarks[number].rating) {
   case 1:
       return '&#9733; &#9734; &#9734; &#9734; &#9734;';
       break;

   case 2:
        return '&#9733; &#9733; &#9734; &#9734; &#9734;';
        break;


    case 3:
        return '&#9733; &#9733; &#9733; &#9734; &#9734;'
        break;


    case 4:
        return '&#9733; &#9733; &#9733; &#9733; &#9734;';
        break;

    case 5:
        return '&#9733; &#9733; &#9733; &#9733; &#9733;';
        break;
}}

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
    const filterMode = store.store.filterMode
    const newstack = store.store.bookmarks;


    if (filterMode === false || Number(filterMode) === 0) {newstack.forEach(function(bookmark,index){
        bigBooks.push(bookmarkDiv(index));
        });
    }

    else {
        function filterTrue(bookmark){
            return bookmark.rating >= Number(filterMode)}
        const filteredStack = newstack.filter(filterTrue);
        console.log(newstack);
        console.log(filteredStack);
        filteredStack.forEach(function(bookmark,index){
            bigBooks.push(bookmarkDiv(index));
        });    
    }

$('.bookmark-stack').html(bigBooks.join(''))}

function toggleAddBookmark() {
    $('.add-bookmark-expand-button').click(e => {
        e.preventDefault();
        store.toggleAddMode();
        $('.add-filter-forms').toggleClass("content");
        $('.add-filter-forms').toggleClass("contentShow");
        render();
    });
}

function filterByRating() {
    $('.js-filter-bookmarks-select').change(e => {
        e.preventDefault();
        store.store.filterMode = $('.js-filter-bookmarks-select').val();
        console.log(store.store.filterMode);
        render();});
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
        api.makeBookmark(title, url, desc, rating)
            .then(function (){
                render();})
    })}

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
    api.deleteBookmark(id)
    .then(function(){render()});
    })
}

function evListenerBind() {
// set event listeners
toggleAddBookmark();
addBookmarkButton();
filterByRating();
expandBookmark();
deleteBookmark();

// show error
}



export default{
    render,
    evListenerBind
}
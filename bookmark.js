'use strict';

import store from './storeBM.js';
import api from './api.js';


// HTML Templates here

function ratingConverter(number) {
    switch (number) {
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
    let expanddiv = `<p class="URL">${storeOb.url}</p>
                     <p class="description">${storeOb.desc}</p>
                     <a href="${storeOb.url}" target="_blank"><button class="visit-site-button">Visit Site</button></a>`

return`<div class="bookmark-div contentShow" id="${storeOb.id}">
            <div class="title-div">
             <button class="title-rating-bookmark btn-l" id="${storeOb.id}"> <p id="${storeOb.id}">${storeOb.title}</p> ${ratingConverter(storeOb.rating)}     
             </button>
           <button class="btn"><i class="fa fa-trash" id="${storeOb.id}"></i></button>
          </div>
          <div class="expanded-bookmark">
             ${storeOb.expanded ? `${expanddiv}`:''}
           </div>
        </div>
 `
}


function render() {
    $('.error-display').html()
    let bigBooks = []
    const filterMode = store.store.filterMode
    const newstack = store.store.bookmarks;

    if (filterMode === false || Number(filterMode) === 0) {
        newstack.forEach(function(bookmark,index){
        bigBooks.push(bookmarkDiv(index));
        });
    }

    else {
        function filterTrue(bookmark){
            return bookmark.rating >= Number(filterMode)}
        const filteredStack = newstack.filter(filterTrue);
        // console.log(newstack);
        // console.log(filteredStack);
        filteredStack.forEach(function(bookmark,index){
            bigBooks.push(bookmarkDiv(index));
        });    
    }

    $('.bookmark-stack').html(bigBooks.join(''))
    if (store.store.errorFound) {
        $('.error-display').html(store.store.errorMessage);
    }
    else{$('.error-display').html('');}
    store.store.errorFound = false;
}

// function toggleAddBookmark() {
//     $('.add-bookmark-expand-button').click(e => {
//         e.preventDefault();
//         store.toggleAddMode();
//         $('.add-filter-forms').toggleClass("content");
//         $('.add-filter-forms').toggleClass("contentShow");
//         render();
//     });
// }

function filterByRating() {
    $('.js-filter-bookmarks-select').change(e => {
        e.preventDefault();
        store.store.filterMode = $('.js-filter-bookmarks-select').val();
        render();});
    }

// needs event delegation to listen from form section 
function addBookmarkButton() {
    $('.add-bookmark-button').click('submit', e => {
        e.preventDefault();
        const title = $('.title-input').val();
        const rating = $('.rating-input').val();
        const url = $('.url-input').val();
        const desc = $('.description-input').val();
        // validate form entry** confirm how
        // add form information to store
        if (rating === null) {store.store.errorFound = true;}
        else {
        api.makeBookmark(title, url, desc, rating)
            .then(function (){
                render();})}
        render();
            })}

function expandBookmark() {
    $('.bookmark-stack').on('click', '.title-rating-bookmark', e => {
        e.preventDefault();
        const id = $(e.target).attr("id");
        // console.log(id)
        store.toggleExpand(id);
        render();
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
// toggleAddBookmark();
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
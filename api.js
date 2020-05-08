'use strict';

import store from './storeBM.js';
import js from './bookmark.js';

const baseUrl = 'https://thinkful-list-api.herokuapp.com/mj-app/bookmarks'

function bookmarksFetch(...arg) {
    let error= false;
    
    return fetch(...arg)
        .then(res => {
            if (!res.ok) {
                error = {code: res.status};}
            return res.json()})
        // .then(resJson => {
        //     store.store.bookmarks.push(resJson);
        //     console.log(store.store)
        //     });
}

function grabBookmarks() {
    return bookmarksFetch(`${baseUrl}`)
    .then(resJson => {
        store.store.bookmarks = resJson;
        // js.render()
        });

}


function makeBookmark(titlE, siteUrl, description, ratinG) {
    const reqBody = JSON.stringify({title: titlE, url: siteUrl, desc: description, rating: ratinG})
    console.log(reqBody)
    const options = {
        method : 'POST',
        headers : {'Content-Type' : "application/json"},
        body : reqBody
    }
    return bookmarksFetch(`${baseUrl}`, options)
    .then(resJson => grabBookmarks())
        }



function deleteBookmark(idString) {
    const options = {
        method: 'DELETE',
    }
    return bookmarksFetch(`${baseUrl}/${idString}`, options)
    .then(resJson => grabBookmarks())
    //then remove object from store.bookmarks;
}

export default {

    bookmarksFetch,
    grabBookmarks,
    makeBookmark,
    deleteBookmark
}
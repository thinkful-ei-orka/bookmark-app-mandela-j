'use strict';

const baseUrl = 'https://thinkful-list-api.herokuapp.com/mj-app/bookmarks'

function bookmarksFetch(...arg) {
    let error= false;
    console.log(...arg);
    
    return fetch(...arg)
        .then(res => {
            if (!res.ok) {
                error = {code: res.status};
            }
            return res.json()})
        .then(resJson => console.log(resJson));
}

function grabBookmarks() {
    return bookmarksFetch(`${baseUrl}`)
    // then place each object in store.bookmarks;
}


function makeBookmark(title, siteUrl, description, rating) {
    const reqBody = JSON.stringify({title, siteUrl, description, rating})
    const options = {
        method : 'POST',
        headers : {'Content-Type' : "application/json"},
        body : reqBody
    }
    return bookmarksfetch(`${baseUrl}/`, reqOptions)
}

function deleteBookmark(id) {
    const options = {
        method: 'DELETE',
    }
    return bookmarksFetch(`${baseUrl}/${id}`, options)
    //then remove object from store.bookmarks;
}

export default {

    bookmarksFetch,
    grabBookmarks,
    makeBookmark,
    deleteBookmark
}
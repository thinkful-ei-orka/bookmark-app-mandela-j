'use strict';

import api from "./api.js"
import bookmark from "./bookmark.js";
import storeBM from "./storeBM.js";

function onStart() {
    api.grabBookmarks()
        .then(function (){
            bookmark.render()});
    bookmark.evListenerBind();  
}
$(onStart);

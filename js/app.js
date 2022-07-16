

let main = document.getElementById(`first_main`);
main[`style`][`background`] = `lightblue`; 
main[`style`][`fontFamily`] = `monospace`;

let changeClass = document.getElementsByClassName(`text`);
for(i=0; i<changeClass.length; i++){
    changeClass[i][`innerHTML`] = `Data has been Overwritten with a link`;
};

let images = document.querySelectorAll(`img`);
for(i=0; i<images.length; i++){
images[i].setAttribute(`src`, `https://images.unsplash.com/photo-1513775192371-1b9d33760c3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1181&q=80`);
};


let all_p_tags = document.querySelectorAll(`p`);
for(i=0; i<all_p_tags.length; i++){
    if(all_p_tags[i].include(`link`)){
    
    }
}
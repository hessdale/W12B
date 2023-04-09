//1 post
let post_button = document.getElementById(`post_button`);
let post_div = document.getElementById(`div1`);
let userId_post = document.getElementById(`user_id_post`);
let userId_post_value = userId_post[`value`];
let id_post = document.getElementById(`id_post`);
let id_post_value = id_post[`value`];
let title_post = document.getElementById(`title_post`);
let title_post_value = title_post[`value`];
let body_post = document.getElementById(`body_post`);
let body_post_value = body_post[`value`];
function postSuccessFunction(response) {
    post_div.insertAdjacentHTML(`beforeend`, `<h1>post successful</h1>`);
};
function postFailureFunction(response) {
    post_div.insertAdjacentHTML(`beforeend`, `<h1>post failed</h1>`);
};

function api_post(details) {
    let post_text = document.getElementById(`post`);
    let post_input = post_text[`value`];
    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts`,
        method: `POST`,
        data: {
            userId: `${userId_post_value}`,
            id: `${id_post_value}`,
            title: `${title_post_value}`,
            body: `${body_post_value}`
        }

    }).then(postSuccessFunction).catch(postFailureFunction);
};
post_button.addEventListener(`click`, api_post);



//2 patch
let patch_button = document.getElementById(`patch_button`);
let patch_div = document.getElementById(`div2`);
function patchSuccessFunction(response) {
    patch_div.insertAdjacentHTML(`beforeend`, `<h1>patch successful</h1>`);
};
function patchFailureFunction(response) {
    patch_div.insertAdjacentHTML(`beforeend`, `<h1>patch failed</h1>`);
};

function api_patch(details) {
    let patch_text = document.getElementById(` patch`);
    let patch_input = patch_text[`value`];
    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts/1`
    }).then(patchSuccessFunction).catch(patchFailureFunction);
};
patch_button.addEventListener(`click`, api_patch);



//3 delete
let delete_button = document.getElementById(`delete_button`);
let delete_div = document.getElementById(`div3`);
function deleteSuccessFunction(response) {
    delete_div.insertAdjacentHTML(`beforeend`, `<h1>delete successful</h1>`);
};
function deleteFailureFunction(response) {
    delete_div.insertAdjacentHTML(`beforeend`, `<h1>delete failed</h1>`);
};


function api_delete(details) {
    let delete_text = document.getElementById(`delete`);
    let delete_input = delete_text[`value`];
    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts/1`
    }).then(deleteSuccessFunction).catch(deleteFailureFunction);
};
delete_button.addEventListener(`click`, api_delete);



//4 get
let get_button = document.getElementById(`get_button`);
let get_div = document.getElementById(`div4`);
function getSuccessFunction(response) {
    get_div.insertAdjacentHTML(`beforeend`, `<h1>get successful</h1>`);
    for (i = 0; i < response.data.length; i++) {
        get_div.insertAdjacentHTML(`beforeend`, `<h1>USER ID: ${response.data[i].userId}</h1><h1>ID: ${response.data[i].id}</h1><p>TITLE: ${response.data[i].title}</p><p>BODY: ${response.data[i].body}</p>`);
    }
};
function getFailureFunction(response) {
    get_div.insertAdjacentHTML(`beforeend`, `<h1>get failed</h1>`);
};

function api_get(details) {
    let get_text = document.getElementById(`get`);
    let get_input = get_text[`value`];
    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts`
    }).then(getSuccessFunction).catch(getFailureFunction);
};
get_button.addEventListener(`click`, api_get);
axios.request({
    url: `https://jsonplaceholder.typicode.com/posts`
}).then(getSuccessFunction).catch(getFailureFunction);
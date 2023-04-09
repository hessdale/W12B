//1 post section
//defining post button from html
let post_button = document.getElementById(`post_button`);
//defining post div to insert success
let post_div = document.getElementById(`div1`);
//defining user id for input
let userId_post = document.getElementById(`user_id_post`);
//defining id for input
let id_post = document.getElementById(`id_post`);
//defining title for input
let title_post = document.getElementById(`title_post`);
//defining body for input
let body_post = document.getElementById(`body_post`);
//function for success api.request
function postSuccessFunction(response) {
    //inserts html on page
    post_div.insertAdjacentHTML(`beforebegin`, `<h1>post successful</h1>`);
};
//function for failure of api.request
function postFailureFunction(response) {
    //inserts html on page
    post_div.insertAdjacentHTML(`beforebegin`, `<h1>post failed</h1>`);
};
//function holding api request so it can be used on a button
function api_post(details) {
    //defining the values of the above inputs
    let userId_post_value = userId_post[`value`];
    let id_post_value = id_post[`value`];
    let title_post_value = title_post[`value`];
    let body_post_value = body_post[`value`];
    ///requests via POST with data from the values
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
//adding button event listener
post_button.addEventListener(`click`, api_post);

//2 patch section
//defining patch button from html
let patch_button = document.getElementById(`patch_button`);
//defining patch div to insert html
let patch_div = document.getElementById(`div2`);
//defining inputs from html
let userId_patch = document.getElementById(`user_id_patch`);
let id_patch = document.getElementById(`id_patch`);
let title_patch = document.getElementById(`title_patch`);
let body_patch = document.getElementById(`body_patch`);
//function for success
function patchSuccessFunction(response) {
    //inserts html on page
    patch_div.insertAdjacentHTML(`beforebegin`, `<h1>patch successful</h1>`);
};
//function for failure
function patchFailureFunction(response) {
    //inserts html on page
    patch_div.insertAdjacentHTML(`beforebegin`, `<h1>patch failed</h1>`);
};
//function to use axios request for patch with a button
function api_patch(details) {
    //getting values for above inputs
    let userId_patch_value = userId_patch[`value`];
    let id_patch_value = id_patch[`value`];
    let title_patch_value = title_patch[`value`];
    let body_patch_value = body_patch[`value`];
    //PATCH axios request with above values in data
    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts/1`,
        method: `PATCH`,
        data: {
            userId: `${userId_patch_value}`,
            id: `${id_patch_value}`,
            title: `${title_patch_value}`,
            body: `${body_patch_value}`
        }
    }).then(patchSuccessFunction).catch(patchFailureFunction);
};
//adding button event listener
patch_button.addEventListener(`click`, api_patch);

//3 delete section (dont actually delete)
//defining button on page from html
let delete_button = document.getElementById(`delete_button`);
//defining div to inject html
let delete_div = document.getElementById(`div3`);
//success function that inserst html
function deleteSuccessFunction(response) {
    delete_div.insertAdjacentHTML(`beforeend`, `<h1>delete successful</h1>`);
};
//failure function that inserts html
function deleteFailureFunction(response) {
    delete_div.insertAdjacentHTML(`beforeend`, `<h1>delete failed</h1>`);
};
//function that holds axios request for delete so it can be added to eventlistener
function api_delete(details) {
    //getting value of delete id
    let delete_by_id = document.getElementById(`delete_by_id`);
    let delete_input = delete_by_id[`value`];
    //axios request with delete method that deletes certain post
    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts/${delete_input}`,
        method: `DELETE`,
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

function getSuccessFunctionRefresh(response) {
    get_div.innerHTML = ``;
    get_div.insertAdjacentHTML(`beforeend`, `<h1>get successful</h1>`);
    for (i = 0; i < response.data.length; i++) {
        get_div.insertAdjacentHTML(`beforeend`, `<h1>USER ID: ${response.data[i].userId}</h1><h1>ID: ${response.data[i].id}</h1><p>TITLE: ${response.data[i].title}</p><p>BODY: ${response.data[i].body}</p>`);
    }
};
function getFailureFunctionRefresh(response) {
    get_div.insertAdjacentHTML(`beforeend`, `<h1>get failed</h1>`);
};

function api_get(details) {
    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts`
    }).then(getSuccessFunction).catch(getFailureFunction);
};
function api_get_refresh(details) {
    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts`
    }).then(getSuccessFunctionRefresh).catch(getFailureFunctionRefresh);
};
get_button.addEventListener(`click`, api_get_refresh);
axios.request({
    url: `https://jsonplaceholder.typicode.com/posts`
}).then(getSuccessFunction).catch(getFailureFunction);
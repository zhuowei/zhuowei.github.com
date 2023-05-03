const resultsDiv = document.getElementById("results");
const searchBox = document.getElementById("searchbox");
const resultsTemplate = document.getElementById("results-template");
async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://search.bsky.social/search/posts?q=" + encodeURIComponent(searchBox.value));
    const responseData = await response.json();
    //responseData.sort((a, b) => -(a.post.createdAt - b.post.createdAt));
    const resultsElements = responseData.map((result) => {
        const elem = resultsTemplate.cloneNode(true);
        resultsTemplate.style.display="";
        resultsTemplate.removeAttribute("id");
        const usernameElem = elem.querySelector(".username");
        usernameElem.href = "https://blue.amazingca.dev/?username=" + encodeURIComponent(result.post.user);
        usernameElem.textContent = "@" + result.post.user;
        const postLinkElem = elem.querySelector(".post-link");
        postLinkElem.href = "https://blue.amazingca.dev/?username=" + encodeURIComponent(result.post.user) + "&postid=" + encodeURIComponent(result.tid.split("/")[1]);
        postLinkElem.textContent = moment(result.post.createdAt / 1000000).fromNow();
        elem.querySelector(".post-content").textContent = result.post.text;
        return elem;
    });
    resultsDiv.replaceChildren(...resultsElements);
}
document.getElementById("searchform").onsubmit = handleSubmit;
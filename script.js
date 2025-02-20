const posts = [
    { title: "February Blog Post", link: "post1.html" },
    { title: "March Blog Post", link: "post2.html" },
    { title: "April Blog Post", link: "post3.html" },
    { title: "May Blog Post", link: "post4.html" }
    

];

const container = document.getElementById("posts-container");

posts.forEach(post => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `<h2><a href="${post.link}">${post.title}</a></h2>`;
    container.appendChild(postDiv);
});

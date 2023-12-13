const loginUser = JSON.parse(localStorage.getItem('loginusers'));
const postHandler = (e) => {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const date = new Date();

    const postDate = `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`;

    const inputField = document.getElementById('postfield').value;
    if (inputField == ""){
        alert("empty post please write something")
        return;
    }
    
    const postModel = {
        id: posts.length,
        user: {
            userName: loginUser.name,
            email: loginUser.email
        },
        postDesc: inputField,
        postDate: postDate

    }
    posts.push(postModel)
    console.log(posts)
    
    localStorage.setItem('posts',   JSON.stringify(posts));
    setAllPost();
}

const setAllPost = () => {
    
    let divMainPost = document.getElementById('post-container');
    divMainPost.innerHTML = ''
    const posts = JSON.parse(localStorage.getItem('posts'));
    posts.reverse().forEach((post) => {
       divMainPost.innerHTML += `<div >
    <h3>${post.user.userName}</h3>
    <h5>${post.postDate}</h5>
    <p>${post.postDesc}</p>
  </div>` 
    });
    


}
setAllPost()
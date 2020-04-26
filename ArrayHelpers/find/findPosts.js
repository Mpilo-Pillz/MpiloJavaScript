var posts = [
    { id: 1, title: 'POst made by id 1'},
    { id: 2, title: 'Post made by Id 2'}
];

var comment = {postId: 2, content: 'This a second post'};

function postForComment(posts, comment) {
    return posts.find(function(post) {
        return post.id === comment.postId;
    });
}

console.log(postForComment(posts, comment));

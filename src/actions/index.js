export async function GetComments ( postId ) {
  let response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${ postId }`)
  let data = await response.json();
  return data;
}

export async function GetUser ( userId ) {
  let response = await fetch(`https://jsonplaceholder.typicode.com/users/${ userId }`)
  let data = await response.json();
  return data;
}

async function GetPostWithComments (posts) {
  return await Promise.all(posts.map( async ( post ) => {
    const commentsData = await GetComments(post.id);
    return { comments: commentsData, ...post };
  }));
}

async function GetPostWithUser (posts) {
  return await Promise.all(posts.map( async ( post ) => {
    const userData = await GetUser(post.userId);
    return { user: userData, ...post };
  }));
}

function filterPost(posts) {
  return posts.filter( post => post.id % 5 === 0 );
}

export async function GetPostComplete () {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts')
  let data = await response.json();
  let filteredPosts = filterPost( data );
  let postsWithUser = await GetPostWithUser(filteredPosts);
  let postsComplete = await GetPostWithComments(postsWithUser);
  return postsComplete;
}

export function StringToHexColor (str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = '#';
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xFF;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}
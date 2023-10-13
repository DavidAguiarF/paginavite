import React, { useEffect, useState } from 'react';
export function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //Esto es para coger las publicaciones de json
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {//aqui estoy ordenado los post, me dieron bastante lata
        const sortedData = data.slice(0, 5).sort((a, b) => a.title.localeCompare(b.title));
        setPosts(sortedData);

      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <div>
      <h2>Recent Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}{post.tbody}</li>//intento coger el body pero no puedo
        ))}
      </ul>
    </div>
  );
}

export default PostList;
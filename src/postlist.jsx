import React, { useEffect, useState } from 'react';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Make an HTTP GET request to fetch the list of posts
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Process the data received from the API and set it in the state
        setPosts(data.slice(0, 5)); // Display the first 5 posts
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
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;

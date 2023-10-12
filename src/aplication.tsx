import React from 'react';
import Counter from './Counter';
import PostList from './postlist'; // Import the PostList component

function App() {
  return (
    <>
      <div>
        <h1>Multiple Counters</h1>
      </div>
      <div className="card">
        <Counter initialCount={5} />
        <Counter initialCount={10} />
      </div>
      <div className="card">
        <PostList /> {/* Use the PostList component to display posts */}
      </div>
    </>
  );
}

export default App;

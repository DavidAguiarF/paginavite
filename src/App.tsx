import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Counter from './Counter';
import PostList from './postlist';

function App() {
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      <h1>Vite + React</h1>
      <div className="card">
        <PostList /> {}
        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
      <div className="card">
        <Counter initialCount={5} /> {/*Aqui es para empezar la cuenta en 5*/}
        
      </div>
      <div className="card">
        <Counter initialCount={10} /> {}
        
      </div>
      <p className="read-the-docs">
        El logo de React te llevara a su página. Allí podras aprender más.
      </p>
    </>
  );
}

export default App;

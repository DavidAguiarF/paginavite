import Counter from './Counter';
import {PostList} from './postlist'; // Me lo marca como error pero despues funciona, no entiendo que sucede

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
        <PostList /> {}
      </div>
    </>
  );
}

export default App;

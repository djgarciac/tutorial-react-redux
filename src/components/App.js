import './App.css';
import List from './List';
import Form from './Form';
import Post from './Posts'

const App = () => {
  return (
    <div className="App">
      <div>
        <h2>Articles</h2>

        <List />
      </div>
      <div>
        <h2>Add a new article</h2>
        <Form />
      </div>
      <div>
        <h2>API Posts</h2>
        <Post />
      </div>
    </div>
  );
}

export default App;

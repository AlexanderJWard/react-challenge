import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarForm from './components/NavBarForm';
import Content from './components/Content';
import PostItem from './components/PostItem';

function App() {
  return (
    <div>
      <NavBarForm/>
      <Sidebar/>
      <Content/>
      <PostItem/>
    </div>
  );
}

export default App;
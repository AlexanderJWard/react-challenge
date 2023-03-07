import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarForm from './components/NavBarForm';
import Content from './components/Content';
import PostItem from './components/PostItem';
import ContentHooks from './components/ContentHooks';

function App() {
  return (
    <div>
      <NavBarForm/>
      <Sidebar/>
      <ContentHooks/>
      <PostItem/>
    </div>
  );
}

export default App;
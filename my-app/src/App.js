import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarForm from './components/NavBarForm';
import Content from './components/Content';
import PostItem from './components/PostItem';
import ContentHooks from './components/ContentHooks';
import PostItemAPI from './components/PostItemAPI';
import ContentAPI from './components/ContentAPI';

function App() {
  return (
    <div>
      <NavBarForm/>
      <Sidebar/>
      <ContentAPI/>
      <PostItemAPI/>
    </div>
  );
}

export default App;
import './App.css';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Posts from './components/Posts/Posts';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (
    <div>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/friends' element={<Friends />}/>
        <Route path='/friend/:friendId' element={<FriendDetails />}/> {/* this is the dynamic route first section is fixed but other is dynamic, this is a variable */}
        {/* nested route */}
        <Route path='/posts' element={<Posts />}>
            <Route path=':postId' element={<PostDetail />}/>
        </Route>
        <Route path='/about' element={<About />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;

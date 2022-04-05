import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Friends from "./components/Friends/Friends";
import Header from "./components/Header/Header";
import FriendDetail from "./components/FriendDetail/FriendDetail";
import Posts from "./components/Posts/Posts";
import PostDetail from "./components/PostDetail/PostDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="friends" element={<Friends />}></Route>
        <Route path="friend/:id" element={<FriendDetail />}></Route>
        <Route path="posts" element={<Posts />}>
          <Route path=":postId" element={<PostDetail />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

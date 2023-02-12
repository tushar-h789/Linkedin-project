import Regisreation from "./pages/Registration";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Newsfeed from "./components/Newsfeed";
import Profile from "./components/Profile";
import ProfileInformation from "./pages/ProfileInformation";
import RootLayOut from "./components/RootLayOut";
import Friends from "./pages/Friends";
import Post from "./pages/Post";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Regisreation />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/home" element={<Home />}></Route>
      {/* <Route path="friends" element={<Friends />}></Route> */}
      <Route path="/newsfeed" element={<Newsfeed/>}></Route>
      <Route path="/profile" element={<RootLayOut/>}>
      <Route index element={<ProfileInformation />}></Route>
      <Route path="friends" element={<Friends />}></Route>
      <Route path="post" element={<Post />}></Route>
      </Route>
      
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import "./App.css";
import LoginForm from "./pages/LoginForm";
import Nav from "./components/Nav";
import Posts from "./pages/Posts";

import { Route, Routes } from "react-router-dom";
const App: React.FC = () => {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </main>
    </>
  );
};

export default App;

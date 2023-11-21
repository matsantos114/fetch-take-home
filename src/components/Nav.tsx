import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  function clearCookies() {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const [name] = cookie.split("=");
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
    }
    navigate("/");
  }
  return (
    <section className="nav">
      <a onClick={clearCookies}>Log Out</a>
      <a href="/Search">Search</a>
      <a href="/posts">Breeds</a>
    </section>
  );
}

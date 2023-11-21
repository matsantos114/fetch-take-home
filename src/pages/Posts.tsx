import { useEffect, useState } from "react";

const Posts = () => {
  let API = "https://frontend-take-home-service.fetch.com/dogs/search/breeds=lab";

  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    async function fetchBreeds() {
      const response = await fetch(API, {
        credentials: "include",
      });
      const data = await response.json();
      console.log("data: ", data);
      setDogs(data);
      return dogs;
    }
    fetchBreeds();
  }, []);
  const breeds = dogs.map((dog, index) => <p key={index}>{dog}</p>);

  return (
    <>
      <ul>{breeds}</ul>
    </>
  );
};

export default Posts;

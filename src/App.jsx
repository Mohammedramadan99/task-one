import { useState } from "react";
import Age from "./components/Age";
import City from "./components/City";
import Name from "./components/Name";

const fetchData = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res([
        {
          age: 30,
          component: "aGe",
        },
        {
          name: "Mike Stephen",
          component: "Name",
        },
        {
          city: "NewYork",
          component: "City",
        },
      ]);
    }, 2000);
  });
};

function App() {
  const [data, setData] = useState([]);
  const handleClick = async () => {
    const data = await fetchData();
    setData(data);
  };
  return (
    <>
      <button onClick={handleClick}>Fetch</button>
    </>
  );
}

export default App;

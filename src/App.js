import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Card from "./Card";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://www.reddit.com/r/reactjs.json");
        setData(response.data.data.children);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Contenterra Project</h1>
      
      {data.map((item) => (
        <Card
          key={item.data.id}
          title={item.data.title}
          selfTextHTML={item.data.selftext_html}
          url={item.data.url}
          score={item.data.score}
        />
      ))}
    </div>
  );
}

export default App;









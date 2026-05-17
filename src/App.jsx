import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api`
        );

        const result = await response.json();

        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchApi();
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Frontend + Backend Connected 🚀</h1>
      <h1>In Frontend CI CD is also working.</h1>

      {data && <h2>{data.message}</h2>}
    </div>
  );
};

export default App;
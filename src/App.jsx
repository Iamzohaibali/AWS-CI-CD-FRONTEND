import  { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(
          "https://zohaib-ahmad-ali.tech/api"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const result = await response.json();

        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApi();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1>Frontend Connected To Backend 🚀</h1>

      <h2>{data.message}</h2>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default App;
import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:1337/api${url}`, {
          headers: {
            Authorization:
              "bearer " +
              "5b9c179e76c91b752475d44730630d8e7c57be4646910a578426d6bdec41601a762657dbdd2b67e6202e73e29f5b0d5d940c6b5bf57a46774e46e968bf28a2fcad8fc38cf088673f8cec8942fc282a2f73c4379cc8ed509bbd7d17c3de3c255e8075a578714227d34e8868cb22534f101339dd0e89a6dfcbc271918cbc0630cd",
          },
        });
        setData(response.data.data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;

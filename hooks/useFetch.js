import { useState, useEffect } from "react";

export default function useFetch(url, options = {}) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setResponse(data);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, [url, options]);
  return { response, error };
}

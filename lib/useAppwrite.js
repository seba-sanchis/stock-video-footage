import { Alert } from "react-native";
import { useEffect, useState } from "react";

export default function useAppwrite(fn) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      try {
        const response = await fn();

        setData(response);
      } catch (error) {
        Alert.alert("Error", error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  function refetch() {
    return fetchData();
  }

  return { data, isLoading, refetch };
}

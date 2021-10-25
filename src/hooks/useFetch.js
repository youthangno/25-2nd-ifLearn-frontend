import { useState, useEffect } from 'react';

const useFetch = url => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchUrl() {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.jSxa98uKu7i-QAszAY0wdZVh3VrriKqvh12cSWEQZ_w',
        },
      });

      const json = await res.json();
      setData(json);
    }

    fetchUrl(url);
  }, [url]);

  return data;
};

export { useFetch };

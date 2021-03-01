import React, { useState, useEffect } from "react";

function useSearchPosts() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("react");

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const fetchPosts = await fetch(
        "https://hn.algolia.com/api/v1/search?query=" + query
      );
      const { ...result } = await fetchPosts.json();
      if (!ignore) {
        setData(...result.hits);
      }
    }

    fetchData();
    return () => {
      ignore = true;
    };
  }, [query]);

  return [data, setQuery];
  //   (
  //     <>
  //       <input value={query} onChange={(e) => setQuery(e.target.value)} />
  //       <ul>
  //         {data.hits.map((item) => (
  //           <li key={item.objectID}>
  //             <a href={item.url}>{item.title}</a>
  //           </li>
  //         ))}
  //       </ul>
  //     </>
  //   );
}

export default useSearchPosts;

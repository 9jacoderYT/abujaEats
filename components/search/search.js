import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";

export default function Search({ results, setResults, places }) {
  const [search, setSearch] = useState("");

  const filteringSearch = () => {
    if (!search) {
      setResults(places);
      return;
    }
    /// congtinue from her

    let newResults = [];
    for (let i = 0; i < results.length; i++) {
      const s = results[i].title.toLowerCase();
      const check = s.match(search.toLowerCase());
      if (check) {
        newResults.push(results[i]);
      }
    }

    console.log(newResults);
    console.log(search);
    console.log(results);

    setResults(newResults);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      filteringSearch();
    }, 1000);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="m-3">
      <div className="max-w-5xl md:flex mx-auto p-1 border border-2 rounded-lg md:rounded-full shadow-md bg-white">
        <div className="flex-1 flex">
          <span className="my-auto ml-2">
            <SearchIcon className="text-4xl" />
          </span>

          <input
            type="text"
            className="flex-1 p-3 outline-none text-xl placeholder-shown:border-black"
            placeholder="Places to go, things to try, first date choices ..."
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <button className="bg-green-400 p-3  px-5 rounded-md md:rounded-full text-xl font-bold w-full md:w-auto">
          Search
        </button>
      </div>
    </div>
  );
}

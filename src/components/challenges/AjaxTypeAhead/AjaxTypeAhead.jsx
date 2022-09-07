import React, { useEffect, useState } from "react";
import "./AjaxTypeAhead.css";
import { nanoid } from "nanoid";

function AjaxTypeAhead(props) {
  const [search, setSearch] = useState("");
  const [dataArr, setDataArr] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const endpoint =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

  useEffect(() => {
    fetch(endpoint)
      .then((data) => data.json())
      .then((response) => setDataArr([...response]));
  }, []);

  function handleChane(e) {
    setSearch(e.target.value);
    filterData(search);
  }

  function filterData(search) {
    if (search.length > 0) {
      const tempData = dataArr.filter(
        (data) =>
          data.city.toLowerCase().includes(search) ||
          data.state.toLowerCase().includes(search)
      );
      setFilteredData(tempData);
    }
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const filterDataElem = filteredData.map((place) => (
    <li key={nanoid()}>
      <span className="name">
        {place.city}, {place.state}
      </span>
      <span className="population">{numberWithCommas(place.population)}</span>
    </li>
  ));

  return (
    <div className="ajaxConatainer">
      <form className="search-form">
        <input
          type="text"
          className="search"
          placeholder="City or State"
          onChange={handleChane}
          value={search}
        />

        <ul className="suggestions">
          {search.length === 0 && (
            <>
              {" "}
              <li>Filter for a city</li>
              <li>or a state</li>
            </>
          )}
          {search.length > 0 && filterDataElem}
        </ul>
      </form>
    </div>
  );
}

export default AjaxTypeAhead;

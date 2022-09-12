import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border: 2px solid #f9dc5c;
`;

function ArrayCardioDay1(props) {
  const inventors = [
    { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
    { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 },
    { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
    { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
    { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
    { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
    { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
  ];

  const people = [
    "Bernhard, Sandra",
    "Bethea, Erin",
    "Becker, Carl",
    "Bentsen, Lloyd",
    "Beckett, Samuel",
    "Blake, William",
    "Berger, Ric",
    "Beddoes, Mick",
    "Beethoven, Ludwig",
    "Belloc, Hilaire",
    "Begin, Menachem",
    "Bellow, Saul",
    "Benchley, Robert",
    "Blair, Robert",
    "Benenson, Peter",
    "Benjamin, Walter",
    "Berlin, Irving",
    "Benn, Tony",
    "Benson, Leana",
    "Bent, Silas",
    "Berle, Milton",
    "Berry, Halle",
    "Biko, Steve",
    "Beck, Glenn",
    "Bergman, Ingmar",
    "Black, Elk",
    "Berio, Luciano",
    "Berne, Eric",
    "Berra, Yogi",
    "Berry, Wendell",
    "Bevan, Aneurin",
    "Ben-Gurion, David",
    "Bevel, Ken",
    "Biden, Joseph",
    "Bennington, Chester",
    "Bierce, Ambrose",
    "Billings, Josh",
    "Birrell, Augustine",
    "Blair, Tony",
    "Beecher, Henry",
    "Biondo, Frank",
  ];

  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's

  const fifteen = inventors.filter(
    (inventor) => inventor.year > 1500 && inventor.year < 1600
  );
  console.table(fifteen);

  // Array.prototype.map()
  // 2. Give us an array of the inventors first and last names

  const firstNLastName = inventors.map(
    (inventor) => inventor.first + " " + inventor.last
  );
  console.table(firstNLastName);

  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest

  const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
  console.table(ordered);

  // Array.prototype.reduce()
  // 4. How many years did all the inventors live all together?

  const totalYear = inventors.reduce((accum, curr) => {
    const totalYearLived = curr.passed - curr.year;
    const name = curr.first + " " + curr.last;
    accum.push({ name, totalYearLived });
    return accum;
  }, []);
  console.log("How many years did all the inventors lived");
  console.table(totalYear);

  // 5. Sort the inventors by years lived

  const orderByYearsLived = inventors
    .reduce((accum, curr) => {
      const totalYearLived = curr.passed - curr.year;
      const name = curr.first + " " + curr.last;
      accum.push({ name, totalYearLived });
      return accum;
    }, [])
    .sort((a, b) => (a.totalYearLived > b.totalYearLived ? 1 : -1));

  console.log("Sort the inventors by years lived");
  console.table(orderByYearsLived);

  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

  // 7. sort Exercise
  // Sort the people alphabetically by last name

  const sortPeopleByLastName = people
    .map((person) => {
      const personArr = person.split(",");
      const [last, first] = personArr;
      const personObj = { first, last };
      return personObj;
    })
    .sort((a, b) => (a.last > b.last ? 1 : -1));
  console.table(sortPeopleByLastName);

  // 8. Reduce Exercise
  // Sum up the instances of each of these
  const data = [
    "car",
    "car",
    "truck",
    "truck",
    "bike",
    "walk",
    "car",
    "van",
    "bike",
    "walk",
    "car",
    "van",
    "car",
    "truck",
  ];
  const instances = data.reduce((accum, curr) => {
    console.log(accum.curr);
    if (!accum[curr]) {
      accum[curr] = 1;
    } else {
      accum[curr]++;
    }
    return accum;
  }, {});
  console.table(instances);

  return (
    <>
      <StyledContainer>
        Psst: have a look at the JavaScript Console 💁
      </StyledContainer>
    </>
  );
}

export default ArrayCardioDay1;
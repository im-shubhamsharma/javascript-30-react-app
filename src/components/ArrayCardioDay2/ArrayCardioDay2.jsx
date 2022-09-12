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

function ArrayCardioDay2(props) {
  const people = [
    { name: "Wes", year: 1988 },
    { name: "Kait", year: 1986 },
    { name: "Irv", year: 1970 },
    { name: "Lux", year: 2015 },
  ];

  const comments = [
    { text: "Love this!", id: 523423 },
    { text: "Super good", id: 823423 },
    { text: "You are the best", id: 2039842 },
    { text: "Ramen is my fav food ever", id: 123523 },
    { text: "Nice Nice Nice!", id: 542328 },
  ];

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
  const people1 = people.some(
    (person) => new Date().getFullYear() - person.year >= 19
  );
  console.log("-----------------------------------------------------------");
  console.log(
    "Array.some method will returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array. "
  );
  console.table(people1);

  // Array.prototype.every() // is everyone 19 or older?
  const people2 = people.every(
    (person) => new Date().getFullYear - person.year >= 19
  );
  console.log("-----------------------------------------------------------");
  console.log(
    "The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value."
  );
  console.log(people2);

  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
  const comments1 = comments.find((comment) => comment.id === 823423);
  console.log("-----------------------------------------------------------");
  console.log(
    "The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned. "
  );
  console.log(comments1);
  console.table(comments1);

  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423
  const comments2 = comments.findIndex((comment) => comment.id === 823423);
  console.log("-----------------------------------------------------------");
  console.log(
    "The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned. "
  );
  console.log(comments2);

  return (
    <>
      <StyledContainer>
        Psst: have a look at the JavaScript Console 💁
      </StyledContainer>
    </>
  );
}

export default ArrayCardioDay2;

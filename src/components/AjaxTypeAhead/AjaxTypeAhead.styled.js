import styled from "styled-components";

export const AjaxContainer = styled.div`
  box-sizing: border-box;
  font-family: "helvetica neue";
  font-size: 20px;
  font-weight: 200;
  height: 100vh;
  width: 100%;
  border: 2px solid #f9dc5c;
  padding-top: 5rem;
  overflow: hidden;

  input {
    width: 100%;
    padding: 20px;
  }

  .search-form {
    max-width: 400px;
    margin: 0 auto;
  }

  input.search {
    margin: 0;
    text-align: center;
    outline: 0;
    border: 10px solid #f7f7f7;
    width: 120%;
    left: -10%;
    position: relative;
    top: 10px;
    z-index: 2;
    border-radius: 5px;
    font-size: 40px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.19);
  }

  .suggestions {
    margin: 0;
    padding: 0;
    position: relative;
    /*perspective: 20px;*/
  }

  .suggestions li {
    background: white;
    list-style: none;
    border-bottom: 1px solid #d8d8d8;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);
    color: #000;
    margin: 0;
    padding: 20px;
    transition: background 0.2s;
    display: flex;
    justify-content: space-between;
    text-transform: capitalize;
  }

  .suggestions li:nth-child(even) {
    transform: perspective(100px) rotateX(3deg) translateY(2px) scale(1.001);
    background: linear-gradient(to bottom, #ffffff 0%, #efefef 100%);
  }

  .suggestions li:nth-child(odd) {
    transform: perspective(100px) rotateX(-3deg) translateY(3px);
    background: linear-gradient(to top, #ffffff 0%, #efefef 100%);
  }

  span.population {
    font-size: 15px;
  }

  .hl {
    background: #ffc600;
  }

  @media screen and (max-width: 480px) {
    .search-form {
      max-width: 300px;
      margin: 0 auto;
    }
  }
`;

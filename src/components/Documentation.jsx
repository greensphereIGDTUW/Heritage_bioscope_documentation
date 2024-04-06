import React from "react";
import reactDOM from "react-dom";
import biodiversityapi from "./biodiversityapi.js";
import Card from "./Card";
import CNavbar from "./CNavbar";
import Categories from "./Categories";
import Header from "./Header";
import Footer from "./Footer";
const uniqueList = [
  ...new Set(
    biodiversityapi.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
function Documentation() {
  const [diversityData, setdiversityData] = React.useState(biodiversityapi);
  const [diversityList, setdiversityList] = React.useState(uniqueList);
  const filterItem = (category) => {
    if (category === "All") {
      setdiversityData(biodiversityapi);
      return;
    }

    const updatedList = biodiversityapi.filter((curElem) => {
      return curElem.category === category;
    });
    setdiversityData(updatedList);
  };
  return (
    <>
      <CNavbar />
      <Header  />
      <Categories filterItem={filterItem} diversityList={diversityList} />
      <Card diversityData={diversityData} />
      <Footer/>
    </>
  );
}
export default Documentation;

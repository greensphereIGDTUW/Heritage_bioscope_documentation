import React from "react";
import reactDOM from "react-dom";
import biodiversityapi from "./biodiversityapi.js";
import Card from "./Card";
import CNavbar from "./CNavbar";
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
      <CNavbar filterItem={filterItem} diversityList={diversityList} />
      <Card diversityData={diversityData} />
      <footer>
        <div className="footer-content">
          <div className="Contact-Us">
            <div>
              <h1>Contact Us</h1>
            </div>
            <div>
              <p>IGDTUW, Kashmere Gate, New Delhi, Delhi, India</p>
            </div>
          </div>

          <div className="Icons">
            <div>
              <i class="fa-brands fa-instagram"></i>
            </div>
            <div>
              <i class="fa-brands fa-facebook-f"></i>
            </div>
            <div>
              <i class="fa-regular fa-envelope"></i>
            </div>
            <div>
              <i class="fa-brands fa-linkedin-in"></i>
            </div>
          </div>
          <div className="Working-Hours">
            <div>
              <h1>Working Hours</h1>
            </div>
            <div>Monday-Friday</div>
          </div>
        </div>
        <div className="footer-line">
          <p>2023 Greensphere All Rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
export default Documentation;

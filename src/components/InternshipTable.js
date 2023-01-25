import React from 'react'
import "../styles/InternshipTable.css"

import downArrow from "../assets/arrow-square-down.png";
import Row from '../assets/Row.png';
import User from '../assets/profile-2user.png';
import Chart from '../assets/chart.png';
import Dots from '../assets/more-2.png';


function InternshipTable() {
  return (

    <div className="grid-container">
      <div className="grid-item top-left title">
        Internship Title{" "}
        <span className="down_arrow">
          <img src={downArrow} alt="down arrow" />{" "}
        </span>
      </div>
      <div className="grid-item title">
        {" "}
        Completion Period{" "}
        <span className="down_arrow">
          <img src={downArrow} alt="down arrow" />{" "}
        </span>
      </div>
      <div className="grid-item title">
        {" "}
        Total Entrolled{" "}
        <span className="down_arrow">
          <img src={downArrow} alt="down arrow" />{" "}
        </span>
      </div>
      <div className="grid-item title">
        Qualified Candidates{" "}
        <span className="down_arrow">
          <img src={downArrow} alt="down arrow" />{" "}
        </span>
      </div>
      <div className="grid-item top-right title"></div>
      {/* row 2 */}
      <div className="grid-item product">
        Product Design GVI{" "}
        <p>
          Amet minim mollit non deserunt est sit aliqua dolor do amet sint.{" "}
        </p>
      </div>
      <div className="grid-item created">
        120 days <p>(created on 10/12/2021)</p>
      </div>
      <div className="grid-item">
        <span className="purple_btn">20,000</span>
        
      </div>
      <div className="grid-item"><img src={Row}/></div>
      <div className="grid-item"><img src={Chart}/><img src={User}/><img src={Dots}/></div>
      {/* row 3 */}
      <div className="grid-item product">
        Product Design GVI{" "}
        <p>
          Amet minim mollit non deserunt est sit aliqua dolor do amet sint.{" "}
        </p>
      </div>
      <div className="grid-item created">
        120 days <p>(created on 10/12/2021)</p>
      </div>
      <div className="grid-item">
        <span className="purple_btn">20,000</span>
      </div>
      <div className="grid-item"><img src={Row}/></div>
      <div className="grid-item"><img src={Chart}/><img src={User}/><img src={Dots}/></div>
      {/* row 4 */}
      <div className="grid-item product">
        Product Design GVI{" "}
        <p>
          Amet minim mollit non deserunt est sit aliqua dolor do amet sint.{" "}
        </p>
      </div>
      <div className="grid-item created">
        120 days <p>(created on 10/12/2021)</p>
      </div>
      <div className="grid-item">
        <span className="purple_btn">20,000</span>
      </div>
      <div className="grid-item"><img src={Row}/></div>
      <div className="grid-item"><img src={Chart}/><img src={User}/><img src={Dots}/></div>
      {/* row 5 */}
      <div className="grid-item product">
        Product Design GVI{" "}
        <p>
          Amet minim mollit non deserunt est sit aliqua dolor do amet sint.{" "}
        </p>
      </div>
      <div className="grid-item created">
        120 days <p>(created on 10/12/2021)</p>
      </div>
      <div className="grid-item">
        <span className="purple_btn">20,000</span>
      </div>
      <div className="grid-item"><img src={Row}/></div>
      <div className="grid-item"><img src={Chart}/><img src={User}/><img src={Dots}/></div>
      {/* row 6 */}
      <div className="grid-item bottom-left product">
        Product Design GVI{" "}
        <p>
          Amet minim mollit non deserunt est sit aliqua dolor do amet sint.{" "}
        </p>
      </div>
      <div className="grid-item created">
        120 days <p>(created on 10/12/2021)</p>
      </div>
      <div className="grid-item">
        <span className="purple_btn">20,000</span>
      </div>
      <div className="grid-item"><img src={Row}/></div>
      <div className="grid-item bottom-right"><img src={Chart}/><img src={User}/><img src={Dots}/></div>
    </div>
  );
}

export default InternshipTable
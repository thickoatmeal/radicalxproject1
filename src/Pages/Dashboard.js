import React from 'react';
import Sidebar from '../components/Sidebar';
import TextContainer from '../components/TextContainer';
import Graph from '../components/Graph';
import Button from '../components/Button';
import '../styles/dashboard.css';
import AdddIcon from '../assets/add-square (2).png';
import InternshipTable from "../components/InternshipTable"

const Dashboard = () => {
  return (
    <div className="dashboard-container">
    <Sidebar />
    <div className="internship-container">
            <div className="title-container">
            <h2>Internships</h2>
            <Button bgColor="#793ef5"textColor="white" style={{borderRadius: '30px'}}>
            <img src={AdddIcon} alt="" />
            Create New Internships
          </Button>
        </div>
        <div className='insights-container'>
       <TextContainer 
       title="Internship insights" 
       description="In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowlege in which knowledge about space can be both a priori and synthetic."/>
        <Graph />
      </div>
      
      
      <InternshipTable/>
  
      
      </div>
    </div>
  )
}

export default Dashboard
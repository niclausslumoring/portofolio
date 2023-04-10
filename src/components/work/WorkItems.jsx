import React from "react";
import { Link } from "react-router-dom";

const WorkItems = ({item}) => {

    
    return (
        <div className="work_card" key={item.id}>
            <img src = {item.image} alt="" className="work_img"/>
            <h3 className="work_title">{item.title}</h3>
            <a href="#" className="work_button">
                <i className="bx bx-right-arrow-alt work_button-icon"></i>
            </a>
            <Link to = {`/detail/${item.id}`} className="services_button">View Detail<i class="uil uil-arrow-right services_button-icon"></i> </Link>
            
        </div>
    );
}

export default WorkItems
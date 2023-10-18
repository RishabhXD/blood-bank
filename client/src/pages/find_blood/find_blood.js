//use object id and create a filter to find a user having particular blood group, city, state

import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import "./find_blood.css";






import React, { useState, useEffect } from "react";
import "./find_blood.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";


export default function FindBlood() {
  const [users, setUsers] = useState([]);
  const location = useLocation();
  const [bloodgroup, setBloodgroup] = useState("");
  const [dist, setDist] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("users/all");
      setUsers(res.data);
    };
    fetchUsers();
    console.log(bloodgroup, dist, state);
  }, []);

  const handleSubmit = async (e) => {
    //filter data from users/all and state must contain space
    
    e.preventDefault();
    const res = await axios.get(
      `users/find${bloodgroup}/${dist}/${state}` 
    );
    setUsers(res.data);
    //if not found then show no user found

    if(res.data.length===0){
      alert("No user found")
    }
    //if there is no state then show all users
    if(state===""){
      const res = await axios.get("users/all");
      setUsers(res.data);
    }

  };

  return (
    <>
     




      <div style={{ height: "1vh", zIndex: "-1" }}>
        <svg
          width="1700"
          height="870"
          viewBox="0 0 946 968"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          zIndex="-1"
        >
          <g filter="url(#filter0_d_93_102)">
            <path
              d="M897 811.5C731.274 699.342 302.232 960 22.5 960C-257.232 960 -484 733.232 -484 453.5C-484 173.768 -257.232 -53 22.5 -53C302.232 -53 1144.5 979 897 811.5Z"
              fill="url(#paint0_linear_93_102)"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_93_102"
              x="-488"
              y="-53"
              width="1433.96"
              height="1021"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.647059 0 0 0 0 0.643137 0 0 0 0 0.643137 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_93_102"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_93_102"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_93_102"
              x1="-169.5"
              y1="26.9997"
              x2="330.5"
              y2="874.999"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.221679" stop-color="#B32346" />
              <stop offset="0.66922" stop-color="#6A0B37" />
            </linearGradient>
          </defs>
        </svg>
      </div>
     
      <div className="register-box" style={{margiTop:'1rem'}}>
        <div className="red-box">
          <h5>Find Blood</h5>
        </div>

      <div className="containerof">
       
         <div className="findblood">
        <div className="findbloodWrapper">
      
          <div className="findbloodBottom">
            <form onSubmit={handleSubmit}>
              <div className="findbloodForm">
                <div className="findbloodFormGroup">
                  <label className="findbloodLabel">Blood Group</label>
                  <select
                    className="findbloodInput"
                    onChange={(e) => setBloodgroup(e.target.value)}
                  >
                     <option value="Select">Select</option>
                      <option value="A-">A-</option>
                      <option value="A+">A+</option>
                      <option value="A1+">A1+</option>
                      <option value="A1-">A1-</option>
                      <option value="A1B+">A1B+</option>
                      <option value="A1B-">A1B-</option>
                      <option value="A2+">A2+</option>
                      <option value="A2-">A2-</option>
                      <option value="A2B+">A2B+</option>
                      <option value="A2B-">A2B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                  </select>
                </div>
                <div className="findbloodFormGroup">
                  <label className="findbloodLabel">Dist</label>
                 
                  <input
                    className="findbloodInput"
                    type="text"
                    placeholder="Enter your city"
                    onChange={(e) => setDist(e.target.value)}
                  />
                </div>
                <div className="findbloodFormGroup">
                  <label className="findbloodLabel">
                    State
                  </label>
                  <select
                    className="findbloodInput"
                    onChange={(e) => setState(e.target.value)}
                  >
                    <option value="Select">Select</option>
                     <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="West Bengal">West Bengal</option>
                      <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                      <option value="Daman and Diu">Daman and Diu</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Lakshadweep">Lakshadweep</option>
                      <option value="Puducherry">Puducherry</option>
                      <option value="Ladakh">Ladakh</option>
                  
                  </select>
                  {/* <input
                    className="findbloodInput"
                    type="text"
                    placeholder="Enter your state"
                    onChange={(e) => setState(e.target.value)}
                  /> */}
                </div>
                <button className="findbloodButton" type="submit">
                  Search
                </button>
                <br/>
                <br/>
              </div>
            </form>
          </div>
          <div className="showTableData">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Blood Group</th>
                  <th scope="col">Dist</th>
                  <th scope="col">State</th>
                  <th scope="col">Email</th>
                  <th scope="col">Contact</th>
                </tr>
              </thead>
              
              <tbody>
                {users.map((u) => (
                  <tr>
                  
                    <td>{u.fname}</td>
                    <td>{u.lname}</td>
                    <td>{u.bloodgroup}</td>
                    <td>{u.dist}</td>
                    <td>{u.state}</td>
                    <td>{u.email}</td>
                    <td>{u.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
            <div className="noDataFound">
              {users.length === 0 && <h2>No Data Found</h2>}
            </div>
              

        </div>
      </div>

      </div>
      </div>
    


    </>
  );
}


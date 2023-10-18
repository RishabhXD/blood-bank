import { useRef } from "react";
import axios from "axios";
import "./register.css";


export default function Register() {

  const username = useRef();
  const fname = useRef();
  const lname = useRef();
  const gender = useRef();
  const email = useRef();
  const phone = useRef();
  const bloodgroup = useRef();
  const dist = useRef();
  const state = useRef();

  const handleClick = async (e) => {
    e.preventDefault();
   
      const user = {
        username: username.current.value,
        fname: fname.current.value,
        lname: lname.current.value,
        gender: gender.current.value,
        email: email.current.value,
        phone: phone.current.value,
        bloodgroup: bloodgroup.current.value,
        dist: dist.current.value,
        state: state.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        // history.push("/login");
        console.log("User Registered");
        

      } catch (err) {
        console.log(err);
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
     
      <div
        className="register-box"
        style={{ height: "70vh", marginTop: "4rem" }}
      >
        <div class="red-box">
          <h5>Refer a Donor</h5>
        </div>
        <div class="white-box">
 
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", textAlign:'center', margin:'auto'}}>
          <form onSubmit={handleClick}  >
          <input 
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <br/>
          <input
              placeholder="First Name"
              required
              ref={fname}
              className="loginInput"
            />
            <br/>
            <input
              placeholder="Last Name"
              required
              ref={lname}
              className="loginInput"
            />
            <br/>
            <input type="radio" value="Male" name="gender" ref={gender} className="loginRadio"/> Male
            <input type="radio" value="Female" name="gender" ref={gender} className="loginRadio"/> Female
            <input type="radio" value="Other" name="gender" ref={gender} className="loginRadio" /> Other
            <br/>
             <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <br/>
               <input
              placeholder="Phone Number"
              required
              ref={phone}
              className="loginInput"
            />
            <br/>
               <input
              placeholder="District"
              required
              ref={dist}
              className="loginInput"
            />
            <br/>
            <select ref={state} className="loginInput">
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
              placeholder="State"
              required
              ref={state}
              className="loginInput"
            /> */}
            <br/>
            <select ref={bloodgroup} className="loginInput">
            <option value="A+" >A+</option>
            <option value="A-">A-</option>
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
            <br/>
            <button className="loginButton" type="submit">
              Register for Donor
            </button>
            add popup if user Registered successfully
            
            </form>
            </div>
        </div>
      </div>





    </>
  );
}


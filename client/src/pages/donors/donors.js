import React, { useState } from "react";
import Card from "@mui/material/Card";
import { DataGrid } from "@mui/x-data-grid";
// import "../find_blood/find_blood.css";

function Index() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];
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
    
      <div className="register-box">
        <div className="red-box">
          <h5>Donor's</h5>
        </div>
        <Card className="white-box">
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </Card>
      </div>
      <footer style={{ marginTop: "2rem", zIndex: "1" }}>
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.025)",
            height: "4vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          © 2022 Copyright
        </div>
      </footer>
    </>
  );
}

export default Index;

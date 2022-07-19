import React from "react";
import {
  Collapse,
  IconButton,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";




const dataTable = [
  {
 
    id: 1,
    name: "Leif",
    surname: "Bertenshaw",
    email: "lbertenshaw0@cisco.com",
    phone: "9436064987",
    contact: "360, Military Rd, Marol, Andheri East"
  },
  {
  
    id: 2,
    name: "Judon",
    surname: "Normanvell",
    email: "jnormanvell1@dailymotion.com",
    phone: "2109804474",
    contact: "Shastri Nagar, L Block"
  },
  {
   
    id: 3,
    name: "Rickard",
    surname: "Faunt",
    email: "rfaunt2@wordpress.com",
    phone: "2091186424",
    contact: "Shastri Nagar, L Block"
  },
  {
 
    id: 4,
    name: "Larissa",
    surname: "Gothrup",
    email: "lgothrup3@cdc.gov",
    phone: "2563566062",
    contact: "Shastri Nagar, L Block"
  },
  {
  
    id: 5,
    name: "Trescha",
    surname: "O'Corrane",
    email: "tocorrane4@google.cn",
    phone: "4418060092",
    contact: "Shastri Nagar, L Block"
  },
  {
 
    id: 6,
    name: "Benoit",
    surname: "Oxenbury",
    email: "boxenbury5@tinyurl.com",
    phone: "6413061525",
    contact: "Shastri Nagar, L Block"
  },
  {
 
    id: 7,
    name: "Sayre",
    surname: "Whickman",
    email: "swhickman6@sourceforge.net",
    phone: "2347913491",
    contact: "Shastri Nagar, L Block"
  },
  {
   
    id: 8,
    name: "Sigfried",
    surname: "Tanby",
    email: "stanby7@utexas.edu",
    phone: "9919986555",
    contact: "Shastri Nagar, L Block"
  },
  {
 
    id: 9,
    name: "Consuela",
    surname: "Bezemer",
    email: "cbezemer8@topsy.com",
    phone: "7946122207",
    contact: "Shastri Nagar, L Block"
  },
  {
 
    id: 10,
    name: "Konstantine",
    surname: "Dudeney",
    email: "kdudeney9@squarespace.com",
    phone: "7911963731",
    contact: "Shastri Nagar, L Block"
  },
  {
 
    id: 11,
    name: "Jacquelin",
    surname: "O'Carrol",
    email: "jocarrola@tinyurl.com",
    phone: "8343407281",
    contact: "Shastri Nagar, L Block"
  },
  {
  
    id: 12,
    name: "Joly",
    surname: "MacNab",
    email: "jmacnabb@omniture.com",
    phone: "5447458974",
    contact: "Shastri Nagar, L Block"
  },
  {
 
    id: 13,
    name: "Mari",
    surname: "Rubenchik",
    email: "mrubenchikc@angelfire.com",
    phone: "6902337568",
    contact: "Shastri Nagar, L Block"
  },
  {

    id: 14,
    name: "Alyce",
    surname: "MacBey",
    email: "amacbeyd@networksolutions.com",
    phone: "7499740793",
    contact: "Shastri Nagar, L Block"
  },
  {
  
    id: 15,
    name: "Jaime",
    surname: "McDonald",
    email: "jmcdonalde@narod.ru",
    phone: "4415845302",
    contact:"Rohtak - Sonipat Rd"
  },
  {
  
    id: 16,
    name: "Sigismundo",
    surname: "Dugue",
    email: "sduguef@gravatar.com",
    phone: "8099632114",
    contact:"Rohtak - Sonipat Rd"
  },
  {

    id: 17,
    name: "Alleyn",
    surname: "Ruthen",
    email: "arutheng@blog.com",
    phone: "4788819399",
    contact:"Rohtak - Sonipat Rd"
  },
  {
  
    id: 18,
    name: "Lucky",
    surname: "Milella",
    email: "lmilellah@constantcontact.com",
    phone: "6772393059",
    contact:"Rohtak - Sonipat Rd"
  },
  {

    id: 19,
    name: "Leonardo",
    surname: "Moresby",
    email: "lmoresbyi@ftc.gov",
    phone: "8046490166",
    contact:"Rohtak - Sonipat Rd"
  },
  {
 
    id: 20,
    name: "Maggee",
    surname: "Colbeck",
    email: "mcolbeckj@forbes.com",
    phone: "3541418603",
    contact:"Rohtak - Sonipat Rd"
  }
];



export default function Jobportaltable() {
  const [open, setOpen] = React.useState(false);
  const breakArrays = (parentArr) => {
    if(parentArr.length >1){
        let arrayFirst = []
        for(let i = 0; i<1; i++){
            arrayFirst[i] = parentArr[i]
        }
        let arraySecond = []
        for(let i = 1; i<parentArr.length; i++){
            arraySecond[i] = parentArr[i]
        }
        return {
            topArr: arrayFirst,
            bottomArr: arraySecond
        }
    }else{
        let arrayFirst = []
        for(let i = 0; i<parentArr.length; i++){
            arrayFirst[i] = parentArr[i]
        }
        let arraySecond = []
        return {
            topArr: arrayFirst,
            bottomArr: arraySecond
        }
    }

  }
  const arrays = breakArrays(dataTable)


  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableBody>
        <Typography>JOB PORTAL</Typography>
        
          {
              arrays.topArr.map((row, index)=>{
                  return (
                    <TableRow key={row.id}>
                     
                    <TableCell>{row.id}</TableCell>
                   
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.surname}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.phone}</TableCell>
                    <TableCell>{row.contact}</TableCell>
                  </TableRow>
                  )
              })
          }
      
          {
              arrays.bottomArr.map((row, index)=>{
                  return (
                    <TableRow key={row.id} sx={{display: !open ? "none" : null}}>
                      
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.surname}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.phone}</TableCell>
                    <TableCell>{row.contact}</TableCell>
                  </TableRow>
                  )
              })
          }
         
        </TableBody>
      </Table>
      <div style={{textAlign: 'right'}}>
          <IconButton
                aria-label="expand row"
                size="large"
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
              </IconButton>
          </div>
    </TableContainer>
  );
}

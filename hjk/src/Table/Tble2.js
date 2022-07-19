import React from "react";
import {
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Typography,
  Card
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";




const dataTable = [
  {
    avatar: <Avatar
      sizes="small"
      src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    />,
    id: 1,
    name: "Leif",
    surname: "Bertenshaw",
    email: "lbertenshaw0@cisco.com",
    phone: "9436064987",
    contact: "360, Military Rd, Marol, Andheri East"
  },
  {
    avatar: <Avatar
      sizes="small"
      src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    />,
    id: 2,
    name: "Judon",
    surname: "Normanvell",
    email: "jnormanvell1@dailymotion.com",
    phone: "2109804474",
    contact: "Shastri Nagar, L Block"
  },
  {
    avatar: <Avatar
      sizes="small"
      src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    />,
    id: 3,
    name: "Rickard",
    surname: "Faunt",
    email: "rfaunt2@wordpress.com",
    phone: "2091186424",
    contact: "Shastri Nagar, L Block"
  },
  {
    avatar: <Avatar
      sizes="small"
      src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    />,
    id: 4,
    name: "Larissa",
    surname: "Gothrup",
    email: "lgothrup3@cdc.gov",
    phone: "2563566062",
    contact: "Shastri Nagar, L Block"
  },
  {
    avatar: <Avatar
      sizes="small"
      src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    />,
    id: 5,
    name: "Trescha",
    surname: "O'Corrane",
    email: "tocorrane4@google.cn",
    phone: "4418060092",
    contact: "Shastri Nagar, L Block"
  },
  {
    avatar: <Avatar
      sizes="small"
      src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    />,
    id: 6,
    name: "Benoit",
    surname: "Oxenbury",
    email: "boxenbury5@tinyurl.com",
    phone: "6413061525",
    contact: "Shastri Nagar, L Block"
  },
  {
    avatar: <Avatar
      sizes="small"
      src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    />,
    id: 7,
    name: "Sayre",
    surname: "Whickman",
    email: "swhickman6@sourceforge.net",
    phone: "2347913491",
    contact: "Shastri Nagar, L Block"
  },
  {
    avatar: <Avatar
      sizes="small"
      src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    />,
    id: 8,
    name: "Sigfried",
    surname: "Tanby",
    email: "stanby7@utexas.edu",
    phone: "9919986555",
    contact: "Shastri Nagar, L Block"
  },
  {
    avatar: <Avatar
      sizes="small"
      src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    />,
    id: 9,
    name: "Consuela",
    surname: "Bezemer",
    email: "cbezemer8@topsy.com",
    phone: "7946122207",
    contact: "Shastri Nagar, L Block"
  },
  {
    avatar: <Avatar
      sizes="small"
      src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    />,
    id: 10,
    name: "Konstantine",
    surname: "Dudeney",
    email: "kdudeney9@squarespace.com",
    phone: "7911963731",
    contact: "Shastri Nagar, L Block"
  },
  {
    avatar: <Avatar
      sizes="small"
      src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    />,
    id: 11,
    name: "Jacquelin",
    surname: "O'Carrol",
    email: "jocarrola@tinyurl.com",
    phone: "8343407281",
    contact: "Shastri Nagar, L Block"
  },
  {
    avatar: <Avatar
      sizes="small"
      src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    />,
    id: 12,
    name: "Joly",
    surname: "MacNab",
    email: "jmacnabb@omniture.com",
    phone: "5447458974",
    contact: "Shastri Nagar, L Block"
  },
  {
    avatar: <Avatar
      sizes="small"
      src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    />,
    id: 13,
    name: "Mari",
    surname: "Rubenchik",
    email: "mrubenchikc@angelfire.com",
    phone: "6902337568",
    contact: "Shastri Nagar, L Block"
  },
  {
    avatar: <Avatar
      sizes="small"
      src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    />,
    id: 14,
    name: "Alyce",
    surname: "MacBey",
    email: "amacbeyd@networksolutions.com",
    phone: "7499740793",
    contact: "Shastri Nagar, L Block"
  },
  {
    avatar: <Avatar
      sizes="small"
      src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    />,
    id: 15,
    name: "Jaime",
    surname: "McDonald",
    email: "jmcdonalde@narod.ru",
    phone: "4415845302",
    contact: "Rohtak - Sonipat Rd"
  },
  {
    avatar: <Avatar
      sizes="small"
      src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    />,
    id: 16,
    name: "Sigismundo",
    surname: "Dugue",
    email: "sduguef@gravatar.com",
    phone: "8099632114",
    contact: "Rohtak - Sonipat Rd"
  },
  {
    avatar: <Avatar
      sizes="small"
      src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    />,
    id: 17,
    name: "Alleyn",
    surname: "Ruthen",
    email: "arutheng@blog.com",
    phone: "4788819399",
    contact: "Rohtak - Sonipat Rd"
  },
  {
    avatar: <Avatar
      sizes="small"
      src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    />,
    id: 18,
    name: "Lucky",
    surname: "Milella",
    email: "lmilellah@constantcontact.com",
    phone: "6772393059",
    contact: "Rohtak - Sonipat Rd"
  },
  {
    avatar: <Avatar
      sizes="small"
      src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    />,
    id: 19,
    name: "Leonardo",
    surname: "Moresby",
    email: "lmoresbyi@ftc.gov",
    phone: "8046490166",
    contact: "Rohtak - Sonipat Rd"
  },
  {
    avatar: <Avatar
      sizes="small"
      src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    />,
    id: 20,
    name: "Maggee",
    surname: "Colbeck",
    email: "mcolbeckj@forbes.com",
    phone: "3541418603",
    contact: "Rohtak - Sonipat Rd"
  }
];



export default function Table2() {
  const [open, setOpen] = React.useState(false);
  const breakArrays = (parentArr) => {
    if (parentArr.length > 1) {
      let arrayFirst = []
      for (let i = 0; i < 1; i++) {
        arrayFirst[i] = parentArr[i]
      }
      let arraySecond = []
      for (let i = 1; i < parentArr.length; i++) {
        arraySecond[i] = parentArr[i]
      }
      return {
        topArr: arrayFirst,
        bottomArr: arraySecond
      }
    } else {
      let arrayFirst = []
      for (let i = 0; i < parentArr.length; i++) {
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
    <Card sx={{ border: '1px solid ash-grey', boxShadow: '5px 10px 20px grey', margin: '2%', backgroundColor: '#e8e8e8' }}>
       <Typography sx={{ margin: '1%' }} variant={"h5"}>PROFILE</Typography>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableBody>
         
            {
              arrays.topArr.map((row, index) => {
                return (
                  <TableRow key={row.id}>

                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.avatar}</TableCell>
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
              arrays.bottomArr.map((row, index) => {
                return (
                  <TableRow key={row.id} sx={{ display: !open ? "none" : null }}>

                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.avatar}</TableCell>
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
        <div style={{ textAlign: 'right' }}>
          <IconButton
            aria-label="expand row"
            size="large"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </div>
      </TableContainer>
    </Card>
  );
}

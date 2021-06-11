import React, { useState } from 'react';

import DUMMY_TICKETS from "../../resources/DummyTickets";

import { Button, ButtonGroup } from "@material-ui/core";

import { DataGrid } from "@material-ui/data-grid";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import TicketModal from './TicketModal';

const Tickets = () => {
  const drawHandler = () => {
    console.log(`draw!`);
  };

  const renderDetailsButton = (params) => {
    return (
      <>
        {/* <ButtonGroup disableElevation size="small" variant="contained" color="primary" aria-label="contained primary button group"> */}
        <Button
          color="primary"
          // variant="contained"
          // color="primary"
          fontSize="small"
          style={{ marginLeft: 8 }}
          onClick={() => {
            setIsEditable(true);
          }}
        >
          +
        </Button>
        <DeleteOutlineIcon
          color="primary"
          // variant="contained"
          // color="primary"
          fontSize="small"
          style={{ marginLeft: 8 }}
          onClick={() => {
            console.log("click :>> ");
          }}
        >
          +
        </DeleteOutlineIcon>
      </>
    );
  };
  
  const [isEditable,setIsEditable] = useState(false);
  let row={number:"",seller:"",buyer:"", date:"", winning:false};
  const onRowDoubleClickHandler = (event) => {
    console.log('2click :>> ', event);
    row=event.row;
    setIsEditable(true);
  }

  const columns = [
    { field: "id", headerName: "ID", width: 70, editable: false },
    { field: "number", headerName: "Tkt Nbr", width: 150, editable: false },
    { field: "seller", headerName: "Seller", width: 200, editable: false  },
    { field: "buyer", headerName: "Buyer", width: 130, editable: false  },
    { field: "date", headerName: "Date", type: 'date', width: 180, editable: false  },
    
    {
      field: "winning",
      headerName: "Winning",
      type: "boolean",
      width: 100,
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 90,
      renderCell: renderDetailsButton,
    },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    // },
  ];

  // const tickets = DUMMY_TICKETS.map((ticket) => {
  //   return (
  //     <li>
  //       <Ticket key={ticket.number} number={ticket.number}
  //       buyer={ticket.buyer} seller={ticket.seller}
  //       winning={ticket.winning}/>
  //     </li>
  //   );
  // });

  const sellHandler = (event) => {
    console.log("sell :>> ");
  };

  // const onRowLeaveHandler = (event) => {
  //   console.log('leaving row. event :>> ', event);
  // }


  const openModalHandler = () => {
    console.log('openmodal :>> ');
    setIsEditable(true);
    return isEditable;
  };

  const closeModalHandler = () => {
    setIsEditable(false);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={sellHandler}>
        Sell new ticket
      </Button>

      <div style={{ height: 1000, width: "100%" }}>
        <DataGrid
          rows={DUMMY_TICKETS}
          columns={columns}
          pageSize={50}
          checkboxSelection={false}
          onRowDoubleClick= {onRowDoubleClickHandler}
          // onRowLeave={onRowLeaveHandler}
        />
      </div>
      {isEditable && <TicketModal open = {true} number={row.number} onClick={closeModalHandler}/>}
    </>
  );
};

export default Tickets;

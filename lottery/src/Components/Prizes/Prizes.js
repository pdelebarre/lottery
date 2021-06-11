import Prize from "./Prize";
import "./Prizes.css";
import NewPrizeModal from "./NewPrize/NewPrizeModal";
import DUMMY_PRIZES from "../../resources/DummyPrizes";

import { Button } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';



const Prizes = (prize) => {

  const newPrizeHandler = (prize) => {
    console.log(prize);
  };

  const columns = [
    // { field: 'id', headerName: 'ID', width: 60 },
    { field: 'rank', headerName: 'Rank', width: 100 },
    { field: 'name', headerName: 'Name', width: 160 },
    { field: 'sponsor', headerName: 'Sponsor', width: 160 },
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

  return (
    <div className="prizes">
      {/* <h2>
        Prizes <NewPrizeModal onNewPrize={newPrizeHandler} />
      </h2> */}
      <Button variant="contained" color="primary" onClick={newPrizeHandler}>New ticket</Button>
 
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={DUMMY_PRIZES}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default Prizes;

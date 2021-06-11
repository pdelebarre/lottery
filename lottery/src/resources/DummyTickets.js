import {
  randomId,
  randomBrokerId,
  randomTraderName,
  randomCreatedDate
} from '@material-ui/x-grid-data-generator';


const generateTickets = (nbTkts) => {
  let tickets = [];
  for (let index = 0; index < nbTkts; index++) {
    tickets.push({
      id: randomId(),
      number: randomBrokerId(),
      seller: randomTraderName(),
      buyer: randomTraderName(),
      date: randomCreatedDate(),
      winning: Math.random()<0.5
    });
    
  }
  return tickets;
};

const DUMMY_TICKETS = generateTickets(200);


// [
//   {
//     id: randomId(),
//     number: randomBrokerId(),
//     seller: randomTraderName(),
//     buyer: randomTraderName(),
//     winning: Math.random()<0.5
//   },
//   {
//     id: 2,
//     number: "BFFG67843",
//     seller: "Dupont",
//     buyer: "Buyer2",
//     winning: true,
//   },
//   {
//     id: 3,
//     number: "HHGH8734",
//     seller: "Durant",
//     buyer: "Buyer3",
//     winning: true,
//   },
//   {
//     id: 4,
//     number: "HHGH8734",
//     seller: randomTraderName(),
//     buyer: randomTraderName(),
//     winning: true,
//   },
// ];

export default DUMMY_TICKETS;

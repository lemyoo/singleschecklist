import "./App.css";
import { FormGroup, Typography } from "@mui/material";
import Eventchecker from "./components/Eventchecker";
function App() {
  const evenstAndStatus = [
    { name: "Flyer for main event", status: false },
    { name: "Flyer with activities", status: false },
    { name: "Design for Tshirt", status: false },
    { name: "Printing of Tshirt", status: false },
    { name: "Place orders for kenkey", status: false },
    { name: "Place orders for popcorn", status: false },
    { name: "Send movie to Pastor", status: false },
    { name: "Send out letters to departments ", status: false },
    { name: "Seek for funding from some church members", status: false },
    { name: "Speak to our patron about the week celebrations", status: false },
    { name: "Pick people for our Personality Day", status: false },
    { name: "Pick someone for the Thursday financial literacy lecture", status: false },
    { name: "Decide on the awards and donations", status: false },
  ];
  return (
    <div className="App">
      <Typography style={{ textDecorationLine: "overline underline", textAlign: "center" }}>
        Activities Check List
      </Typography>
      <FormGroup>
        {evenstAndStatus.map((element) => {
          return <Eventchecker statusOfEvent={element.status} nameOfEvent={element.name} />;
        })}
      </FormGroup>
    </div>
  );
}

export default App;

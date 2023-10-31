import { FormControlLabel, Checkbox } from "@mui/material";

const Eventchecker = ({ statusOfEvent, nameOfEvent }) => {
  return <FormControlLabel control={<Checkbox checked={statusOfEvent} />} label={nameOfEvent} />;
};

export default Eventchecker;

import { Box, LinearProgress } from "@mui/material";
const Progress = ({ progress, setProgress }) => {
  return (
    <Box sx={{ width: "50%" }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
};
export default Progress;

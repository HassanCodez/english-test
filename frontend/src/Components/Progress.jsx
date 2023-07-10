import { Box, LinearProgress } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const Progress = ({ progress, setProgress }) => {
  const [buffer, setBuffer] = useState(10);

  const progressRef = useRef(() => {});
  useEffect(() => {
    progressRef.current = () => {
      if (progress >= 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });
  return (
    <Box sx={{ width: "50%" }}>
      <LinearProgress
        variant="determinate"
        value={progress}
        valueBuffer={buffer}
      />
    </Box>
  );
};

export default Progress;

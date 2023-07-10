import { useEffect, useState } from "react";
import { useGetRandomWordsMutation } from "../store/rankApi";
import { Stack, Container, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RankPage = () => {
  const [getRank] = useGetRandomWordsMutation();
  const [rank, setRank] = useState();
  const [score, setScore] = useState();
  useEffect(() => {
    setScore(localStorage.getItem("score"));
    getRank(localStorage.getItem("score")).then((res) => {
      localStorage.removeItem("score");
      return setRank(res?.data?.rank);
    });
    console.log(rank);
  }, []);
  const nav = useNavigate();
  return (
    <Container sx={{ my: 5 }}>
      <Typography
        variant="h3"
        sx={{
          color: score > 50 ? "green" : "white",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {score > 50 ? "Congratulations" : "Good luck next Time"}
      </Typography>
      <Stack sx={{ my: 5, gap: 5, alignItems: "center" }}>
        <Typography>
          Your score is{" "}
          <Box
            component={"span"}
            sx={{ color: score > 50 ? "green" : "red", fontWeight: "bolder" }}
          >
            {score}%
          </Box>
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          You scored higher than {rank} of people who took the test !
        </Typography>
        <Button variant="outlined" onClick={() => nav("/")}>
          try again
        </Button>
      </Stack>
    </Container>
  );
};

export default RankPage;

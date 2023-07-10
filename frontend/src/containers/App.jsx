import { Stack, Paper, Typography, Button } from "@mui/material";
import Progress from "../Components/Progress";
import { useState } from "react";
import Options from "../Components/Options";
import { useGetRandomWordsQuery } from "../store/randomWordsApi";
import { useNavigate } from "react-router-dom";

function App() {
  const [progress, setProgress] = useState(0);
  const nav = useNavigate();
  const [value, setValue] = useState("");
  const [correct, setCorrect] = useState();
  const { data, isSuccess } = useGetRandomWordsQuery();
  const [score, setScore] = useState(0);
  const submitAnswer = (pos) => {
    setCorrect(pos);
    pos === value && setScore((prev) => prev + 1);
    setTimeout(() => {
      setProgress((prev) => prev + 10);
      setCorrect();
      setValue();
    }, 1000);
  };

  if (progress === 100) {
    nav("/rank");
    localStorage.setItem("score", (score / 10) * 100);
  }

  console.log(progress);
  return (
    <Stack
      sx={{
        display: "flex",
        alignItems: "center",
        py: 5,
        px: 5,
        gap: 5,
      }}
    >
      <Typography sx={{ textAlign: "center" }} variant="h3">
        Parts of speech quiz
      </Typography>
      <Progress progress={progress} setProgress={setProgress} />

      {isSuccess && (
        <>
          <Paper
            sx={{
              px: 5,
              py: 3,
              bgcolor:
                correct?.length > 0 && (correct === value ? "green" : "red"),
              color: correct?.length > 0 && "white",
            }}
            elevation={12}
          >
            <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>
              {data.words[progress / 10]?.word}
            </Typography>
          </Paper>
          <Typography variant="subtitle1">
            Choose the correct word category from the options below:
          </Typography>
          <Stack
            direction={"row"}
            sx={{
              gap: 5,
              flexWrap: "wrap",
              width: "auto",
              justifyContent: "center",
            }}
          >
            <Options value={value} setValue={setValue} correct={correct} />
          </Stack>
          {correct?.length > 0 ? (
            <Typography
              sx={{
                color: correct === value ? "green" : "red",
                fontWeight: "bold",
              }}
            >
              {correct === value ? "TRUE" : "FALSE"}
            </Typography>
          ) : (
            <Button
              onClick={() => submitAnswer(data.words[progress / 10].pos)}
              variant="contained"
              sx={{ bgcolor: "#202124" }}
            >
              Submit
            </Button>
          )}
        </>
      )}
    </Stack>
  );
}

export default App;

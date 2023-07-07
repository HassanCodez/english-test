import { Stack, Paper, Typography, Button  } from "@mui/material";
import Progress from "./Components/Progress";
import { useState } from "react";
import Options from "./Components/Options";
function App() {

  const [value, setValue] = useState('');
  
  return (
    <Stack
      sx={{
        display: "flex",
        alignItems: "center",
        py: 10,
        px:5,
        gap: 10,
      }}
    >
      <Typography sx={{textAlign:'center'}} variant="h3">Parts of speech quiz</Typography>
     <Progress/>
      <Paper sx={{ px: 5, py: 3 }} elevation={12}>
        <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>test</Typography>
      </Paper>
      <Typography variant="subtitle1">Choose the correct word category from the options below:</Typography>
      <Stack direction={'row'} sx={{gap:5, flexWrap:'wrap', width:'auto', justifyContent:'center'}}>
      <Options value={value} setValue={setValue}/>
      </Stack>
      <Button variant="contained" sx={{bgcolor:'#202124'}}>Submit</Button>
    </Stack>
  );
}

export default App;

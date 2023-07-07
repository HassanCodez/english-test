import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material"

const Options = ({value, setValue}) => {
  const categories = ["noun", "verb", "adjective", "adverb"]


    const handleChange = (event) => {
      setValue(event.target.value);
    };
    return (
    <FormControl>
    <RadioGroup
      aria-labelledby="demo-controlled-radio-buttons-group"
      name="controlled-radio-buttons-group"
      value={value}
      onChange={handleChange}
    >
     {categories.map(cat=> (
         <FormControlLabel sx={{textTransform:'capitalize'}} key={cat} value={cat} control={<Radio />} label={cat} />
     ))}
    </RadioGroup>
  </FormControl>
)}

export default Options
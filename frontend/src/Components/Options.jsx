import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
const Options = ({ value, setValue, correct }) => {
  // Define the categories
  const categories = ["noun", "verb", "adjective", "adverb"];
  // Handle the change event
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
        {/* Map through the categories and render each option */}
        {categories.map((category) => (
          <FormControlLabel
            key={category}
            value={category}
            control={<Radio />}
            label={category}
            disabled={correct}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
export default Options;

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
} from "@mui/material";
import { Masonry } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMoreRounded";

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

export const LessonMasonry = () => {
  return (
    <Masonry columns={3} spacing={2}>
      {heights.map((height, index) => (
        <Paper key={index}>
          <Accordion sx={{minHeight:height}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Accordion {index + 1}
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
              minus tenetur ex porro sunt iure, laboriosam corporis, nemo
              aperiam odio pariatur atque dolorem minima neque, delectus
              consequatur ipsa! Adipisci, laborum!
            </AccordionDetails>
          </Accordion>
        </Paper>
      ))}
    </Masonry>
  );
};

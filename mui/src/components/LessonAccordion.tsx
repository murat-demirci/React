import React from "react";
import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export default function LessonAccordion() {
  const [expanded, setexpanded] = useState<string>('');
  console.log(expanded,'expanded')
  const handleChange =
    (panel: string) => (e: React.SyntheticEvent, isExpended: boolean) => {
        setexpanded(isExpended ? panel : '');
        console.log(panel,'panel')
        console.log(isExpended,'isexpanded')
    };
  return (
    <>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange("panel1")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iste
          sapiente veniam labore ullam facilis minima sequi sed, quidem non
          praesentium ducimus nobis! Consectetur rem unde illo adipisci ipsa in?
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange("panel2")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iste
          sapiente veniam labore ullam facilis minima sequi sed, quidem non
          praesentium ducimus nobis! Consectetur rem unde illo adipisci ipsa in?
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange("panel3")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iste
          sapiente veniam labore ullam facilis minima sequi sed, quidem non
          praesentium ducimus nobis! Consectetur rem unde illo adipisci ipsa in?
        </AccordionDetails>
      </Accordion>
    </>
  );
}

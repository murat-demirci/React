import React from "react";
import { useState } from "react";
import {
  Stack,
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
export default function LessonCheckBoc() {
  const [isAccept, setisAccept] = useState(false);
  const [language, setlanguage] = useState<string[]>([]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = language.indexOf(e.target.value);
    if (index === -1) {
        setlanguage([...language,e.target.value]);
    }
    else{
        setlanguage(language.filter((item)=>item !== e.target.value));
    }
  };
  console.log(language)
  return (
    <Stack spacing={5}>
      <Box>
        <FormControl>
          <FormLabel>Egitim Durumu</FormLabel>
          <FormGroup row>
            <FormControlLabel disabled label="Lise" control={<Checkbox />} />
            <FormControlLabel label="Ilk Ogretim" control={<Checkbox />} />
            <FormControlLabel
              label="Universite"
              control={<Checkbox defaultChecked={true} />}
            />
          </FormGroup>
        </FormControl>
      </Box>

      <Box>
        <FormControl>
          <FormLabel>Bilgilendirme</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="Kullanim kosullarini kabul ediyorum."
              control={
                <Checkbox
                  checked={isAccept}
                  onChange={(e) => setisAccept(e.target.checked)}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>

      <Box>
        <FormControl>
          <FormLabel>Hangi dilleri biliyorsun ?</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="Angular"
              value="angular"
              control={
                <Checkbox
                  checked={language.includes("angular")}
                  onChange={handleLanguageChange}
                />
              }
            />
            <FormControlLabel
              label="ReactJS"
              value="reactjs"
              control={
                <Checkbox
                  checked={language.includes("reactjs")}
                  onChange={handleLanguageChange}
                />
              }
            />
            <FormControlLabel
              label="VueJS"
              value="vue"
              control={
                <Checkbox
                  checked={language.includes("vue")}
                  onChange={handleLanguageChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Stack>
  );
}

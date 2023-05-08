import React from "react";
import Typography from "@mui/material/Typography";

export default function LessonTypography() {
  return (
    <div>
      <Typography variant="body1" align="center" color="initial">
        body1
      </Typography>
      <Typography variant="body2" align="center" color="initial">
        body2
      </Typography>
      <Typography variant="h1" align="center" color="initial">
        h1
      </Typography>
      <Typography variant="h2" align="center" color="initial">
        h2
      </Typography>
      <Typography variant="h3" align="center" color="initial">
        h3
      </Typography>
      <Typography variant="h4" align="center" color="initial">
        h4
      </Typography>
      <Typography variant="h5" align="center" color="initial">
        h5
      </Typography>
      <Typography variant="h6" component="p" align="center" color="initial">
        h6
      </Typography>

      <Typography variant="body1" gutterBottom={true} color="initial">
        margin bottom
      </Typography>
      <Typography variant="body1" color="initial">
        random
      </Typography>

      <Typography variant="body1" paragraph={true} color="initial">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
        ratione ipsum nesciunt cum amet laboriosam iste, dolorum culpa
        consectetur ullam quo atque officiis quas ipsam explicabo corporis neque
        cupiditate consequuntur?
      </Typography>

      <Typography variant="subtitle1" color="initial">
        Subtitle1
      </Typography>
      <Typography variant="subtitle2" color="initial">
        Subtitle2
      </Typography>
    </div>
  );
}

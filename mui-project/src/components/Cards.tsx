import {
  Grid,
  Container,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Paper,
} from "@mui/material";
import LikeIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import Img1 from "../images/picsum2.jpg";
import Img2 from "../images/picsum3.jpg";
import Img3 from "../images/picsum4.jpg";
import Img4 from "../images/picsum5.jpg";
import Img5 from "../images/picsum6.jpg";

export default function Cards() {
  return (
    <>
      <Container maxWidth="lg" >
        <Grid container textAlign="center" spacing={2} margin='2rem 0'>
          <Grid item xs={12} md={6} lg={3}>
            <Paper elevation={5}>
              <Card>
                <CardMedia component="img" image={Img1} title="Picsum" />
                <CardContent>
                  <Typography variant="h6" gutterBottom component="div">
                    Picusm
                  </Typography>
                  <Typography
                    sx={{
                      wordWrap: "break-word",
                      textAlign: "start",
                      lineBreak: "anywhere",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid animi qui saepe dignissimos odit nam temporibus
                    fugiat laborum quis eaque cumque nobis quidem accusamus
                    consequatur consectetur labore, nulla iure excepturi.
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton size="small">
                    <LikeIcon color="error" />
                  </IconButton>
                  <IconButton size="small">
                    <ShareIcon color="primary" />
                  </IconButton>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
          <Paper elevation={5}>
              <Card>
                <CardMedia component="img" image={Img2} title="Picsum" />
                <CardContent>
                  <Typography variant="h6" gutterBottom component="div">
                    Picusm
                  </Typography>
                  <Typography
                    sx={{
                      wordWrap: "break-word",
                      textAlign: "start",
                      lineBreak: "anywhere",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid animi qui saepe dignissimos odit nam temporibus
                    fugiat laborum quis eaque cumque nobis quidem accusamus
                    consequatur consectetur labore, nulla iure excepturi.
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton size="small">
                    <LikeIcon color="error" />
                  </IconButton>
                  <IconButton size="small">
                    <ShareIcon color="primary" />
                  </IconButton>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
          <Paper elevation={5}>
              <Card>
                <CardMedia component="img" image={Img3} title="Picsum" />
                <CardContent>
                  <Typography variant="h6" gutterBottom component="div">
                    Picusm
                  </Typography>
                  <Typography
                    sx={{
                      wordWrap: "break-word",
                      textAlign: "start",
                      lineBreak: "anywhere",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid animi qui saepe dignissimos odit nam temporibus
                    fugiat laborum quis eaque cumque nobis quidem accusamus
                    consequatur consectetur labore, nulla iure excepturi.
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton size="small">
                    <LikeIcon color="error" />
                  </IconButton>
                  <IconButton size="small">
                    <ShareIcon color="primary" />
                  </IconButton>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
          <Paper elevation={5}>
              <Card>
                <CardMedia component="img" image={Img4} title="Picsum" />
                <CardContent>
                  <Typography variant="h6" gutterBottom component="div">
                    Picusm
                  </Typography>
                  <Typography
                    sx={{
                      wordWrap: "break-word",
                      textAlign: "start",
                      lineBreak: "anywhere",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid animi qui saepe dignissimos odit nam temporibus
                    fugiat laborum quis eaque cumque nobis quidem accusamus
                    consequatur consectetur labore, nulla iure excepturi.
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton size="small">
                    <LikeIcon color="error" />
                  </IconButton>
                  <IconButton size="small">
                    <ShareIcon color="primary" />
                  </IconButton>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
          <Paper elevation={5}>
              <Card>
                <CardMedia component="img" image={Img5} title="Picsum" />
                <CardContent>
                  <Typography variant="h6" gutterBottom component="div">
                    Picusm
                  </Typography>
                  <Typography
                    sx={{
                      wordWrap: "break-word",
                      textAlign: "start",
                      lineBreak: "anywhere",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid animi qui saepe dignissimos odit nam temporibus
                    fugiat laborum quis eaque cumque nobis quidem accusamus
                    consequatur consectetur labore, nulla iure excepturi.
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton size="small">
                    <LikeIcon color="error" />
                  </IconButton>
                  <IconButton size="small">
                    <ShareIcon color="primary" />
                  </IconButton>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

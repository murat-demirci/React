import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

export default function LessonCard() {
  return (
    <Card sx={{ width: 350, }} raised={true}>
      <CardMedia
        component="img"
        image="https://source.unsplash.com/random"
        height={150}
        title="random image"
      />
      <CardContent>
        <Typography textAlign='center' variant="h6" component="div" gutterBottom={true}>
          Header
        </Typography>
        <Typography variant="body2" component="p">
          Card Content Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Unde laborum perspiciatis ad ab at quibusdam mollitia veritatis
          voluptates aut? Esse fugit non consequatur, a animi nam sit molestias
          recusandae quia!
        </Typography>
      </CardContent>
    <CardActions>
        <Button size="small" color="primary">Incele</Button>
        <Button size="small" color="primary">Kaydet</Button>
    </CardActions>
    </Card>
  );
}

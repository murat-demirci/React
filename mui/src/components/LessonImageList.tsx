import {
  Stack,
  ImageList,
  ImageListItem,
  Box,
  ImageListItemBar,
} from "@mui/material";

export default function LessonImageList() {
  return (
    <Stack>
      <ImageList sx={{ width: 500, height: 450 }} cols={2}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} loading="lazy" />
            <ImageListItemBar title={item.title}/>
          </ImageListItem>
        ))}
      </ImageList>

      <ImageList sx={{ width: 500, height: 450 }} cols={2} variant="quilted">
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1683735450924-ee9bc0a0cdf6",
    title: "dancer",
  },
  {
    img: "https://images.unsplash.com/photo-1683661174895-293d75040b78",
    title: "Goat",
  },
  {
    img: "https://images.unsplash.com/photo-1683520596266-b7811d63e5af",
    title: "mountain",
  },
  {
    img: "https://images.unsplash.com/photo-1683444805823-3de8d2fd1c80",
    title: "dust",
  },
  {
    img: "https://images.unsplash.com/photo-1683538967101-a1543aac2dc9",
    title: "car",
  },
  {
    img: "https://images.unsplash.com/photo-1683480678676-9aff6d4cf61c",
    title: "plane",
  },
  {
    img: "https://images.unsplash.com/photo-1683377117046-99ca0f5a8291",
    title: "Ilia Bronskiy",
  },
  {
    img: "https://images.unsplash.com/photo-1682702750536-965e89de4450",
    title: "ocean",
  },
  {
    img: "https://images.unsplash.com/photo-1683450453846-f92e078e79d4",
    title: "city",
  },
  {
    img: "https://images.unsplash.com/photo-1683659636705-a028691fa4de",
    title: "art",
  },
];

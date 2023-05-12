import { Skeleton, Stack } from "@mui/material";
import { useState } from "react";

export default function LessonSkeleton() {
const [loading, setloading] = useState(false)
  return (
    <Stack spacing={1}>
        {loading ? (
      <Skeleton variant="rounded" animation='wave' width={210} height={60} />)
      :(<img 
      src="https://source.unsplash.com/random/256*144"
      alt="skeleton"
      width={256}
      height={144}/>)}
      
    </Stack>
  );
}

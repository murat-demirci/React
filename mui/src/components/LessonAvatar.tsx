import { Avatar, AvatarGroup, Stack } from "@mui/material";

export default function LessonAvatar() {
    function stringToColor(string: string) {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
      }
      
      function stringAvatar(name: string) {
        return {
          sx: {
            bgcolor: stringToColor(name),
          },
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
      }
  return (
    <Stack>
      <AvatarGroup spacing={-10} max={3}>
        <Avatar
          variant="square"
          alt="john doe"
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36"
        />
        <Avatar
          variant="rounded"
          alt="johnas doe"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
        />
        <Avatar
          variant="circular"
          alt="johnny doe"
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
        />
        <Avatar
          alt="johnes doe"
          src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139"
          sx={{ width: 100, height: 100 }}
        />
      </AvatarGroup>
      <AvatarGroup spacing={-10}>
        <Avatar {...stringAvatar('Murat Demirci')}/>
      </AvatarGroup>
    </Stack>
  );
}

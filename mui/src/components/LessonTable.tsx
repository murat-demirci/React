import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

const rows = [
    {
        name:'john',surname:'doe',age:43,birth:1980
    },
    {
        name:'johnas',surname:'doe',age:33,birth:1990
    },
    {
        name:'johnny',surname:'doe',age:17,birth:2006
    },
    {
        name:'james',surname:'doe',age:50,birth:1973
    },
    {
        name:'julia',surname:'doe',age:23,birth:1999
    }
]
export default function LessonTable() {
  return (
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Surname</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Birth</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {rows.map((row)=>{return(
            <TableRow key={row.name}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.surname}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.birth}</TableCell>
            </TableRow>)
            })}
        </TableBody>
    </Table>
  );
}

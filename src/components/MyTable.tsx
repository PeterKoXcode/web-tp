import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#345381",
    color: "#dddddd",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#dddddd",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#d0d0d6",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(vyskum: string, architektura: string, dice: number) {
  return { vyskum, architektura, dice };
}

const rows = [
  createData("Biomed. Opt. Express", "MGU-Net", 0.881),
  createData("Biomed. Opt. Express", "U-Net", 0.847),
  createData("A. Sampath Kumar, T. Schlosser, et al.", "Modified U-Net", 0.825),
  createData("Náš TP", "U-Net", 0.82),
  createData("Náš TP", "U-Net (Augmentácia)", 0.845),
];

type Props = {};

export default function MyTable({}: Props) {
  return (
    <TableContainer component={Paper} className="w-75 m-auto" >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Výskum</StyledTableCell>
            <StyledTableCell align="center">Architektúra</StyledTableCell>
            <StyledTableCell align="center">Dice skóre</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.vyskum}>
              <StyledTableCell align="center" component="th" scope="row">
                {row.vyskum}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.architektura}
              </StyledTableCell>
              <StyledTableCell align="center">{row.dice}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

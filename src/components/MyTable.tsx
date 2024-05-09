import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";

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

function createData(vyskum: string, link: string, architektura: string, dice: number) {
  return { vyskum, link, architektura, dice };
}

const rows = [
  createData("Biomed. Opt. Express", "https://opg.optica.org/boe/fulltext.cfm?uri=boe-12-4-2204&id=449401", "MGU-Net", 0.881),
  createData("Biomed. Opt. Express", "https://opg.optica.org/boe/fulltext.cfm?uri=boe-12-4-2204&id=449401", "U-Net", 0.847),
  createData("Neurocomputing", "https://www.sciencedirect.com/science/article/abs/pii/S0925231222012620", "VGG16 U-Net", 0.906),
  createData("Náš TP", "https://peterkoxcode.github.io/web-tp/", "U-Net", 0.845),
];

type Props = {};

export default function MyTable({}: Props) {
  return (
    <TableContainer component={Paper} className="w-75 m-auto">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center" style={{fontWeight:"bold"}}>Výskum</StyledTableCell>
            <StyledTableCell align="center" style={{fontWeight:"bold"}}>Architektúra</StyledTableCell>
            <StyledTableCell align="center" style={{fontWeight:"bold"}}>Dice skóre</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.vyskum}>
              <StyledTableCell align="center" component="th" scope="row">
                <Link href={row.link} underline="hover" color="#345381" fontWeight="bold" target="_blank">{row.vyskum}</Link>
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

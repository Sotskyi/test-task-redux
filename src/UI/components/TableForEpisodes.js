import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const TableForEpisodes = ({ data }) => {
  function createData(Name, Type, Dimension) {
    return { Name, Type, Dimension };
  }

  const rows = data.results?.map((el) =>
    createData(el.name, el.type, el.dimension)
  );

  console.log(rows);

  return (
    <TableContainer
      sx={{
        display: "flex",
        marginTop: "50px",
        justifyContent: "center",
        boxShadow: "none",
      }}
      component={Paper}
    >
      <Table
        sx={{ maxWidth: 800, boxShadow: "0px" }}
        size="small"
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "blue" }}>Name</TableCell>
            <TableCell sx={{ color: "blue" }} align="right">
              Type
            </TableCell>
            <TableCell sx={{ color: "blue" }} align="right">
              Dimension
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <TableRow
              key={row.Name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="right">{row.Type}</TableCell>
              <TableCell align="right">{row.Dimension}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

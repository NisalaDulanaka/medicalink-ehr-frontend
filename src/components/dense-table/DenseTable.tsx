import * as React from "react";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

interface Column {
  id: "time" | "nic" | "name" | "gender" | "dob" | "type" | "assignee";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  {
    id: "time",
    label: "Visit Time",
    minWidth: 170,
  },
  { id: "nic", label: "NIC", minWidth: 170 },
  { id: "name", label: "Name", minWidth: 200 },
  {
    id: "gender",
    label: "Gender",
    minWidth: 100,
  },
  {
    id: "dob",
    label: "Date of Birth",
    minWidth: 170,
    align: "right",
  },
  {
    id: "type",
    label: "Visit Type",
    minWidth: 170,
    align: "right",
  },
  {
    id: "assignee",
    label: "Doctor Assigned",
    minWidth: 170,
    align: "right",
  },
];

interface Data {
  time: string;
  nic: string;
  name: string;
  gender: string;
  dob: string;
  type: string;
  assignee: string;
}

function createData(
  time: string,
  nic: string,
  name: string,
  gender: string,
  dob: string,
  type: string,
  assignee: string
): Data {
  return { time, nic, name, gender, dob, type, assignee };
}

const rows = [
  createData(
    "Today, 18:30 - 19:00",
    "200311513520",
    "Chiranga Shalitha",
    "M",
    "24/04/2003",
    "Clinic Visit",
    "Randev"
  ),
  createData(
    "Today, 19:00 - 19:30",
    "200365456765",
    "Nadun Mirissage",
    "M",
    "20/04/2004",
    "Facility Visit",
    "Randev"
  ),
  createData(
    "Today, 19:30 - 20:00",
    "200566443564",
    "Dinali Perera",
    "F",
    "19/03/2005",
    "OPD Visit",
    "Akeem"
  ),
  createData(
    "Today, 20:00 - 20:30",
    "15653448544v",
    "Savini Rathnayake",
    "F",
    "25/11/1999",
    "Facility Visit",
    "Akeem"
  ),
];

export default function DenseTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "auto",
          height: "auto",
        },
      }}
    >
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Today's Appointments
          </Typography>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            Upcoming
          </Typography>
          {/* <Typography variant="body2">Body</Typography> */}
        </CardContent>
        <TableContainer sx={{ maxHeight: 200 }}>
          <Table stickyHeader aria-label="sticky table" size="small">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, fontWeight: "bold" }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.nic}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

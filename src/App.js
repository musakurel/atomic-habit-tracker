import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";

import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
const blue = {
  50: "#F0F7FF",
  100: "rgba(255, 255, 255, 0.1)",
  200: "rgba(255, 255, 255, 0.1)",
  300: "rgba(255, 255, 255, 0.1)",
  400: "rgba(255, 255, 255, 0.1)",
  500: "rgba(255, 255, 255, 0.1)",
  600: "rgb(76, 145, 149)",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  max-width: 50%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:focus {
    color: #fff;
    border-radius: 3px;
    outline: 2px solid ${blue[200]};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const Root = styled("div")(
  ({ theme }) => `
 

  td,
  th {
    border: 1px solid rgba(0, 0, 0, 0.04)  ;
    border-radius: 20px;
    text-align: left;
    padding: 2px;
    font-family: IBM Plex Sans, sans-serif;
  }

 
  `
);
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name) {
  return { name };
}
const data = {};
const newVar = (n) => {
  for (let i = 0; i < n; i++) {
    return <StyledTableCell align="right">{i}</StyledTableCell>;
  }
};

const rows = [
  createData(
    "Frozen yoghurt",
    <Checkbox color="default" />,
    <Checkbox color="secondary" />,
    <Checkbox color="secondary" />,
    <Checkbox color="secondary" />
  ),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const newArr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

export default function CustomizedTables() {
  return (
    <Root sx={{ width: "90%", marginLeft: "59px" }}>
      <h1>Atomic Habit Tracker</h1>
      <TabsUnstyled sx={{ width: "20%"}} defaultValue={0}>
        <TabsList>
          <Tab>Nov</Tab>
          <Tab>Dec</Tab>
          <Tab>Jan</Tab>
          <Tab>Feb</Tab>
          <Tab>March</Tab>
        </TabsList>
        <TabPanel value={2}>
        
        
        <TableContainer
        sx={{
          backgroundColor: "transparent",
        }}
        component={Paper}
      >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead
            sx={{
              backgroundColor: "white",
              padding: "10px",
            }}
          >
            <TableRow>
              <StyledTableCell>Habits</StyledTableCell>
              {newArr.map((row) => (
                <StyledTableCell align="right">{row}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell
                  sx={{ width: "509px" }}
                  component="th"
                  scope="row"
                >
                  <input
                    type="text"
                    placeholder="Habit"
                    className="thcontent"
                  />
                </StyledTableCell>

                {newArr.map((select) => (
                  <StyledTableCell align="right">
                    <Checkbox
                      sx={{
                        color: "#FBFFE2",
                        "&.Mui-checked": {
                          color: "#FBFFE2",
                          opacity: 0.8,
                        },
                      }}
                    />
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        
        
        
        
        </TabPanel>
        <TabPanel value={1}>Second content</TabPanel>
        <TabPanel value={3}>Third content</TabPanel>
      </TabsUnstyled>
      
    </Root>
  );
}

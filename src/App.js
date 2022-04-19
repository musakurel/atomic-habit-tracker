import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Moment from "moment"
import { extendMoment } from 'moment-range';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addHabit, removeHabit, updateHabit } from "./redux/UserReducer";
import UseReducer from "./UseReducer";
const moment = extendMoment(Moment);

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
const AddBox=styled(AddBoxOutlinedIcon)(({ theme }) => ({
  
  fontSize: "1.5rem",
  margin: "0.5rem",
  color: "rgba(0, 0, 0, 0.24)",
  cursor: "pointer",
  "&:hover": {
    color: "rgba(0, 0, 0, 0.48)",
  },
}));

function createData(name) {
  return { name };
}

const monthArray = (m) => {
  const range = moment().range(moment(m).startOf('month'), moment(m).endOf('month'));
  const days = range.by('days');
  return [...days].map(date => date.format(`DD`))
}

const rows = [
"1",
"2",
  
];

const newArr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

export default function CustomizedTables() {
 console.log(monthArray(moment()))
 const habits = useSelector((state) => state.user)

console.log(habits)
  const dispatch = useDispatch()

  const [sendingrow, setSendingRow] = useState(null)
  
  return (
    <Root sx={{ width: "90%", marginLeft: "59px" }}>
      <h1>Atomic Habit Tracker</h1>
      <TabsUnstyled sx={{ width: "20%" }} defaultValue={0}>
        <TabsList>
          <Tab>{moment().subtract(1, "months").format("MMMM")}</Tab>
          <Tab>{moment().format("MMMM")}</Tab>
          <Tab>{moment().add(1, "months").format("MMMM")}</Tab>
          <Tab>{moment().add(2, "months").format("MMMM")}</Tab>
        </TabsList>
        <TabPanel value={0}>
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
                  {monthArray(moment())?.map((row) => (
                    <StyledTableCell align="right">{row}</StyledTableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {habits?.map((row) => (
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
                        defaultValue={row.name}
                        key={row.id}
                        onBlur={(e) =>
                          dispatch(
                            updateHabit({
                              id: row.id,
                              name: e.target.value,
                            })
                          )
                        }
                      />
                    </StyledTableCell>

                    {monthArray(moment())?.map((select) => (
                      <StyledTableCell align="right">
{/*                         {row.name + " " + select}
 */}                        <Checkbox
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
            
            
          <AddBox onClick={() =>
            dispatch(addHabit(""))
          }  />
       
          </TableContainer>
        </TabPanel>
  
      </TabsUnstyled>
    </Root>
  );
}

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import { Box, Grid, Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import Image from "../../../styles/background.jpg";

const headCells = [
  {
    id: "id",
    numeric: false,
    label: "ID",
  },
  {
    id: "name",
    numeric: false,
    label: "Name",
  },
];
function EnhancedTableHead(props) {
  const { onSelectAllClick, numSelected, rowCount } = props;

  return (
    <TableHead
      sx={{
        borderTop: "1px solid rgba(224, 224, 224, 1)",
      }}
    >
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            sx={{ fontWeight: "900", fontSize: "110%" }}
          >
            {headCell.label}
          </TableCell>
        ))}
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  rowCount: PropTypes.number.isRequired,
};

//---------------------------------------------------------------------------

const EnhancedTableToolbar = (props) => {
  const { numSelected, handleDelete } = props;

  return (
    <Toolbar
      sx={{
        bgcolor: "#FF7700",
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%", color: "white" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Grocery Items
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : null}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

//-------------------------------------------------------------------------------------

export default function GroceryList() {
  const [groceries, setGroceries] = useState([]);
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  //fetch all groceryList items on initail render
  useEffect(() => {
    fetchGroceryListItems();
  }, []);

  //fetch all groceryList items
  const fetchGroceryListItems = async () => {
    // Send GET request to 'groceries/all' endpoint
    axios
      .get("http://localhost:4001/groceries/all")
      .then((response) => {
        // Update the groceries state
        setGroceries(response.data);
      })
      .catch((error) =>
        console.error(
          `There was an error retrieving the grocery list: ${error}`
        )
      );
  };

  // Remove a grocery item
  const handleGroceryItemRemove = (id) => {
    // Send PUT request to 'groceries/delete' endpoint
    axios
      .put("http://localhost:4001/groceries/delete", { id: id })
      .then(() => {
        console.log(`Item ${id} removed.`);

        // Fetch all groceries to refresh
        fetchGroceryListItems();
      })
      .catch((error) =>
        console.error(`There was an error removing the ${id} item: ${error}`)
      );
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = groceries.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleDeleteItem = () => {
    console.log(selected);
    selected.map((n) => {
      handleGroceryItemRemove(n);
    });
    setSelected([]);
    alert("Selected items were deleted from the database.");
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - groceries.length) : 0;

  return (
    <Box
      sx={{
        height: "92vh",
        width: "100vw",
        display: "flex",
        justify: "center",
        textAlign: "center",
        flexDirection: "column",
        justifyContent: "center",
        backgroundImage: `url(${Image})`,
      }}
    >
      <Paper elevation={3} sx={{ width: "50vw", ml: "auto", mr: "auto" }}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          handleDelete={handleDeleteItem}
        />
        <TableContainer>
          <Table sx={{ minWidth: "30vw" }} aria-label="grocery table">
            <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={groceries.length}
            />
            <TableBody>
              {groceries
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((grocery, index) => {
                  const isItemSelected = isSelected(grocery.id);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, grocery.id)}
                      key={grocery.id}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      selected={isItemSelected}
                    >
                      <TableCell component="th" id={labelId} scope="row">
                        {index + 1}
                      </TableCell>
                      <TableCell align="left">{grocery.name}</TableCell>
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={groceries.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

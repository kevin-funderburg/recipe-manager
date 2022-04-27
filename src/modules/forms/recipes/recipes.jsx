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
    label: "ID",
  },
  {
    id: "name",
    label: "Name",
  },
  {
    id: "category",
    label: "Category",
  },
  {
    id: "prep_time",
    label: "Prep Time",
  },
  {
    id: "cook_time",
    label: "Cook Time",
  },
  {
    id: "rating",
    label: "Rating",
  },
];
function EnhancedTableHead(props) {
  const { onSelectAllClick, numSelected, rowCount } = props;

  return (
    <TableHead sx={{ borderTop: "1px solid black" }}>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id}>{headCell.label}</TableCell>
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
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Recipe List
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

export default function RecipeList() {
  const [recipeList, setRecipeList] = useState([]);
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  //fetch all recipeList items on initail render
  useEffect(() => {
    fetchRecipeList();
  }, []);

  //fetch all recipeList items
  const fetchRecipeList = async () => {
    // Send GET request to 'recipes/all' endpoint
    axios
      .get("http://localhost:4001/recipes/all")
      .then((response) => {
        // Update the recipeList state
        setRecipeList(response.data);
      })
      .catch((error) =>
        console.error(
          `There was an error retrieving the recipes list: ${error}`
        )
      );
  };

  // Remove a recipeList item
  const handleRecipeListItemRemove = (id) => {
    // Send PUT request to 'recipes/delete' endpoint
    axios
      .put("http://localhost:4001/recipes/delete", { id: id })
      .then(() => {
        console.log(`Item ${id} removed.`);

        // Fetch all recipes to refresh
        fetchRecipeList();
      })
      .catch((error) =>
        console.error(`There was an error removing the ${id} item: ${error}`)
      );
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = recipeList.map((n) => n.id);
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
      handleRecipeListItemRemove(n);
    });
    setSelected([]);
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - recipeList.length) : 0;

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
      <Paper
        elevation={3}
        sx={{ width: "60vw", mb: 2, ml: "auto", mr: "auto" }}
      >
        <EnhancedTableToolbar
          numSelected={selected.length}
          handleDelete={handleDeleteItem}
        />
        <TableContainer>
          <Table sx={{ minWidth: "60vw" }} aria-label="recipe list">
            <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={recipeList.length}
            />
            <TableBody>
              {recipeList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((recipe, index) => {
                  const isItemSelected = isSelected(recipe.id);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, recipe.id)}
                      key={recipe.id}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      selected={isItemSelected}
                    >
                      <TableCell component="th" id={labelId} scope="row">
                        {index + 1}
                      </TableCell>
                      <TableCell align="left">{recipe.name}</TableCell>
                      <TableCell align="left">{recipe.category}</TableCell>
                      <TableCell align="left">{recipe.prep_time}</TableCell>
                      <TableCell align="left">{recipe.cook_time}</TableCell>
                      <TableCell align="left">{recipe.rating}</TableCell>
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
          count={recipeList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

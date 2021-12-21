import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 200,
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 200,
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 200,
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "answeredQuestions",
    headerName: "Answered Questions",
    type: "number",
    width: 200,
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "createdQuestions",
    headerName: "Created Questions",
    type: "number",
    width: 200,
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "score",
    headerName: "Score",
    description: "This column has a value getter and is not sortable.",
    width: 200,
    type: "number",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    valueGetter: (params) =>
      params.row.answeredQuestions + params.row.createdQuestions,
  },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    answeredQuestions: 3,
    createdQuestions: 12,
  },
  {
    id: 2,
    lastName: "Snow",
    firstName: "Jon",
    answeredQuestions: 4,
    createdQuestions: 12,
  },
  {
    id: 3,
    lastName: "Snow",
    firstName: "Jon",
    answeredQuestions: 5,
    createdQuestions: 12,
  },
  {
    id: 4,
    lastName: "Snow",
    firstName: "Jon",
    answeredQuestions: 6,
    createdQuestions: 12,
  },
  {
    id: 5,
    lastName: "Snow",
    firstName: "Jon",
    answeredQuestions: 7,
    createdQuestions: 12,
  },
];

export default function LeaderBoardGrid() {
  const [sortModel, setSortModel] = React.useState([
    {
      field: "score",
      sort: "desc",
    },
  ]);
  return (
    <Box
      style={{
        height: 400,
        width: "100%",
        "& .super-app-theme--header": {
          backgroundColor: "blue",
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        sortModel={sortModel}
        onSortModelChange={(model) => setSortModel(model)}
        sx={{
          "& .super-app-theme--header": {
            backgroundColor: "primary.light",
            color: "common.white",
          },
        }}
      />
    </Box>
  );
}

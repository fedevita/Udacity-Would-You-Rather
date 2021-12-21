import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const columns = [
  {
    field: "id",
    headerName: "ID",
    flex: 1,
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    hide: true,
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "answeredQuestions",
    headerName: "Answered Questions",
    type: "number",
    flex: 1,
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "createdQuestions",
    headerName: "Created Questions",
    type: "number",
    flex: 1,
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "score",
    headerName: "Score",
    description: "This column has a value getter and is not sortable.",
    flex: 1,
    type: "number",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    valueGetter: (params) =>
      params.row.answeredQuestions + params.row.createdQuestions,
  },
];

export default function LeaderBoardGrid(props) {
  const users = props.users;
  const generateRows = (users) => {
    const results = users.map((user) => {
      return {
        id: user.id,
        name: user.name,
        answeredQuestions: Object.values(user.answers).length,
        createdQuestions: user.questions.length,
      };
    });
    return results;
  };

  const rows = generateRows(users);
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
        disableExtendRowFullWidth={true}
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

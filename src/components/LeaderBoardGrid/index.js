import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Avatar, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUsers } from "../../features/users";

const columns = [
  {
    field: "avatar",
    headerName: "Avatar",
    flex: 1,
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    renderCell: (params) => (
      <>
        <Avatar
          alt={params.row.name}
          src={params.row.avatar}
          sx={{ width: 56, height: 56 }}
        />
      </>
    ), // renderCell will render the component
  },
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
  },
  {
    field: "position",
    headerName: "Position",
    flex: 1,
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
  },
];

export default function LeaderBoardGrid() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const users = useSelector((state) => state.users.value);
  const generateRows = (users) => {
    const results = users.map((user) => {
      return {
        avatar: user.avatarURL,
        id: user.id,
        name: user.name,
        answeredQuestions: Object.values(user.answers).length,
        createdQuestions: user.questions.length,
        score: Object.values(user.answers).length + user.questions.length,
        position: "normal",
      };
    });
    return results;
  };
  const sortRows = (users) => {
    const results = users.sort((a, b) =>
      a.score < b.score ? 1 : b.score < a.score ? -1 : 0
    );
    results[0].position = "first";
    results[1].position = "second";
    results[2].position = "third";
    return results;
  };

  const rows = sortRows(generateRows(users));
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
        getRowClassName={(params) =>
          `super-app-theme--${params.getValue(params.id, "position")}`
        }
        sx={{
          "& .super-app-theme--header": {
            backgroundColor: "primary.light",
            color: "common.white",
          },
          "& .super-app-theme--first": {
            backgroundColor: "#FFD700",
            color: "common.white",
          },
          "& .super-app-theme--second": {
            backgroundColor: "#C0C0C0",
            color: "common.white",
          },
          "& .super-app-theme--third": {
            backgroundColor: "#CD7F32",
            color: "common.white",
          },
          "& .super-app-theme--normal": {
            backgroundColor: "common.white",
            color: "text.secondary",
          },
        }}
      />
    </Box>
  );
}

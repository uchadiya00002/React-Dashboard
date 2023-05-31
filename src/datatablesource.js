export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avtar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
  // {
  //   field: "action",
  //   headerName: "Action",
  //   width: 230,
  // },
];
// temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/12815075/pexels-photo-12815075.jpeg?cs=srgb&dl=pexels-ioana-motoc-12815075.jpg&fm=jpg",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lanister",
    img: "https://images.pexels.com/photos/12815075/pexels-photo-12815075.jpeg?cs=srgb&dl=pexels-ioana-motoc-12815075.jpg&fm=jpg",
    status: "passive",
    email: "1snow@gmail.com",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/12815075/pexels-photo-12815075.jpeg?cs=srgb&dl=pexels-ioana-motoc-12815075.jpg&fm=jpg",
    status: "pending",
    email: "1snow@gmail.com",
    age: 37,
  },
];

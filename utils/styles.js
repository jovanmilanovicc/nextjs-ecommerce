const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "#1E3A74",
    "& a": {
      color: "#ffffff",
      marginLeft: 10,
    },
  },
  main: {
    minHeight: "80vh",
  },
  footer: {
    textAlign: "center",
    marginTop: 10,
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  grow: {
    flexGrow: 0.7,
  },
  rightNavbar: {
    padding: "0px 8px",
    display: "flex",
    alignItems: "center",
    fontSize: 18,
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  form: {
    width: "100%",
    maxWidth: 800,
    margin: "0 auto",
  },
  link: {
    color: "#f0c000",
  },
  navbarButton: {
    color: "#ffffff",
    textTransform: "initial",
  },
  transparentBg: {
    backgroundColor: "transparent",
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  error: {
    color: "#f04040",
  },
  cursorPointer: {
    cursor: "pointer",
  },
  fullWidth: {
    width: "100%",
  },
  actions: {
    marginBottom: "10px",
  },
  menuButton: { padding: 0 },
  mt1: { marginTop: '1rem' },
  // search
  searchSection: {
    display: "flex",
    flexBasis: "70%",
    [theme.breakpoints.up("md")]: {
      flexBasis: "auto",
    },
  },
  searchForm: {
    border: "1px solid #ffffff",
    backgroundColor: "#ffffff",
    borderRadius: '5px',
  },
  searchInput: {
    paddingLeft: 10,
    color: "#000000",
    "& ::placeholder": {
      color: "#606060",
    },
  },
  iconButton: {
    backgroundColor: "#f8c040",
    padding: 5,
    borderRadius: "0 5px 5px 0",
    "& span": {
      color: "#000000",
    },
  },
  reviewForm: {
    maxWidth: 800,
    width: "100%",
  },
  reviewItem: {
    marginRight: "1rem",
    borderRight: "1px #808080 solid",
    paddingRight: "1rem",
  },
  sort: {
    marginRight: 5,
  },
}));

export default useStyles;

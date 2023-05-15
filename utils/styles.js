const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
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
    flexGrow: 1,
  },
  rightNavbar: {
    padding: "0px 8px",
    fontSize: 18,
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  form: {
    width: "100%",
    maxWidth: 800,
    margin: '0 auto',
  },
  link: {
    color: '#f0c000',
  },
  navbarButton: {
    color: '#ffffff',
    textTransform: 'initial',
  },
  transparentBg: {
    backgroundColor: 'transparent'
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  error: {
    color: '#f04040'
  },
  cursorPointer: {
    cursor: 'pointer'
  },
  fullWidth: {
    width: '100%'
  },
  actions: {
    marginBottom: '10px',
  }
});

export default useStyles;

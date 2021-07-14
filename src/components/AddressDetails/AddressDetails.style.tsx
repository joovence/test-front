import { makeStyles } from "@material-ui/core";

const AddressDetailsStyle = makeStyles(() => ({
  address: {
    width: 250,
    "& p": {
      display: "flex",
      alignItems: "center"
    },
    "& span": {
      marginLeft: 10
    }
  }
}));

export default AddressDetailsStyle;

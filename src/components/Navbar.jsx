import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import  logo  from "../utils/youtube.png";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: 'white', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
    <img src="https://yt3.ggpht.com/yti/AJo0G0nKXslA57FT5LVCt8K0qBraYrz0LtwrCIwIEQ=s108-c-k-c0x00ffffff-no-rj" alt="" height={45} width={45} border-radius={50} />
  </Stack>
);

export default Navbar;

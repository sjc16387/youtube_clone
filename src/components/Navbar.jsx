import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constant";
import Searchbar from "./Searchbar";

const NavBar = () => (
    <Stack direction="row" alignItems="center" p={2} sx={{
        position: "sticky",
        background:'#000',
        top: 0,
        justifyContent: "space-between",
    }}>
        <Link to="/" style={{display:'flex',alignItems:'center'}}>
            <img src={logo} alt="logo" height={45}></img>
        </Link>
        <Searchbar></Searchbar>
    </Stack>
);

export default NavBar;
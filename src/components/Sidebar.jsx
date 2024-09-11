import { Stack } from "@mui/material";

import { categories } from "../utils/constant"; 

const seletedCategory = "New";

const Sidebar = () => (
    <Stack
        direction="row"
        sx={{
            overflowY:"auto",
            height:{md:'auto',sx:'95%'},
            flexDirection:{md:'column'}
        }}
    >
        {categories.map((category)=>(
            <button className="category-btn"
                style={{
                    background: category.name === seletedCategory && '#fc1503',
                    color: 'white'
                }}
                key={category.name}
            >
                <span style={{color:category.name===seletedCategory?'white':'red',marginRight:'15px'}}>{category.icon}</span>
                <span style={{ opacity: category.name === seletedCategory?'1':'0.8'}}>{category.name}</span>
            </button>
        ))}
    </Stack>
);

export default Sidebar
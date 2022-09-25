import React from "react";
import { Box } from "@mui/system";
import DisplayCard from "../components/DisplayCard";
import { Typography } from "@mui/material";
import CustomerCounter from "../components/CustomerCounter";
import Grid from "@mui/material/Grid";

export default function CustomerView() {
    return (
        <Box sx={{ my: 5, border: 3, px: 5 }}>
            <Typography variant="h4"> CustomerView</Typography>
            <DisplayCard />
            <Grid container spacing={2} sx={{ my: 3 }}>
                {[1, 2, 3, 4].map((counter) => (
                    <CustomerCounter />
                ))}
            </Grid>
        </Box>
    );
}

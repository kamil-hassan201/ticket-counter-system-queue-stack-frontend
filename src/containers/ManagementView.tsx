import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ManagementCounter from "../components/ManagementCounter";

export default function CounterManagement() {
    return (
        <Box sx={{ my: 5, border: 3, px: 5, pt: 2 }}>
            <Typography variant="h5"> Counter Management</Typography>
            <Grid container spacing={2} sx={{ my: 3 }}>
                {[1, 2, 3, 4].map((counter) => (
                    <ManagementCounter />
                ))}
            </Grid>
        </Box>
    );
}

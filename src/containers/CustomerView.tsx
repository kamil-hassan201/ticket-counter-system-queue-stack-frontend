import React from "react";
import { Box } from "@mui/system";
import DisplayCard from "../components/DisplayCard";
import { Typography } from "@mui/material";
import CustomerCounter from "../components/CustomerCounter";
import Grid from "@mui/material/Grid";

interface CustomerViewProps {
    counters: TCounter[] | undefined;
    data: apiDataType | undefined;
}

export default function CustomerView(props: CustomerViewProps) {
    return (
        <Box sx={{ my: 5, border: 3, px: 5, pt: 2 }}>
            <Typography variant="h5"> CustomerView</Typography>
            <DisplayCard data={props.data} />
            <Grid container spacing={2} sx={{ my: 3 }}>
                {props.counters?.map((counter) => (
                    <CustomerCounter {...counter} />
                ))}
            </Grid>
        </Box>
    );
}

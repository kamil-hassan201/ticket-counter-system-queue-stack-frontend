import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ManagementCounter from "../components/ManagementCounter";

interface ManagementViewProps {
    counters: TCounter[] | undefined;
    handleGoOffline: (num: number) => void;
    handleGoOnline: (num: number) => void;
    handleCompleteCurrent: (num: number) => void;
    handleCallNext: (num: number) => void;
}

export default function ManagementView(props: ManagementViewProps) {
    return (
        <Box sx={{ my: 5, border: 3, px: 5, pt: 2 }}>
            <Typography variant="h5"> Counter Management</Typography>
            <Grid container spacing={2} sx={{ my: 3 }}>
                {props.counters?.map((counter) => (
                    <ManagementCounter
                        handleGoOffline={props.handleGoOffline}
                        handleGoOnline={props.handleGoOnline}
                        handleCompleteCurrent={props.handleCompleteCurrent}
                        handleCallNext={props.handleCallNext}
                        counter={counter}
                    />
                ))}
            </Grid>
        </Box>
    );
}

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CircleIcon from "@mui/icons-material/Circle";

export default function CustomerCounter() {
    return (
        <Grid item xs={3}>
            <Card variant="outlined">
                <React.Fragment>
                    <CardContent>
                        <CircleIcon
                            sx={{ float: "right", mb: 2 }}
                            color="success"
                        />
                        <Typography variant="h6" component="div">
                            Counter: 1
                        </Typography>
                        <Typography variant="body1" component="div">
                            Card Number
                        </Typography>
                    </CardContent>
                </React.Fragment>
            </Card>
        </Grid>
    );
}

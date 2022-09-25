import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

interface ManagementCounterProps {
    counter: TCounter;
    handleGoOffline: (num: number) => void;
    handleGoOnline: (num: number) => void;
}

export default function ManagementCounter(props: ManagementCounterProps) {
    return (
        <Grid item xs={3}>
            <Card variant="outlined">
                <React.Fragment>
                    <CardContent>
                        <Typography variant="h6" component="div">
                            Counter: {props.counter.num}
                        </Typography>
                    </CardContent>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 2,
                        }}
                    >
                        <Button
                            sx={{ mx: "auto" }}
                            variant="outlined"
                            size="medium"
                            onClick={() =>
                                props.counter.status === "offline"
                                    ? props.handleGoOnline(props.counter.num)
                                    : props.handleGoOffline(props.counter.num)
                            }
                        >
                            {props.counter.status === "offline"
                                ? " Go Online"
                                : "Go Off line"}
                        </Button>
                        <Button
                            sx={{ mx: "auto" }}
                            variant="outlined"
                            size="medium"
                        >
                            Comp Curr
                        </Button>
                        <Button
                            sx={{ mx: "auto" }}
                            variant="outlined"
                            size="medium"
                        >
                            Call Next
                        </Button>
                    </Box>
                </React.Fragment>
            </Card>
        </Grid>
    );
}

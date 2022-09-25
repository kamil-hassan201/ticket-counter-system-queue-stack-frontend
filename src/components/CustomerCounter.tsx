import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CircleIcon from "@mui/icons-material/Circle";

export default function CustomerCounter(props: TCounter) {
    let color: "success" | "disabled" | "error" = "success";
    if (props.status === "offline") {
        color = "disabled";
    } else if (props.status === "serving") {
        color = "error";
    } else if (props.status === "online") {
        color = "success";
    }

    return (
        <Grid item xs={3}>
            <Card variant="outlined">
                <React.Fragment>
                    <CardContent>
                        <CircleIcon
                            sx={{ float: "right", mb: 2 }}
                            color={color}
                        />
                        <Typography variant="h6" component="div">
                            Counter: {props?.num}
                        </Typography>
                        <Typography variant="body1" component="div">
                            {props?.status === "offline"
                                ? "Off Line"
                                : props?.currentCard
                                ? props?.currentCard
                                : "Waiting"}
                        </Typography>
                    </CardContent>
                </React.Fragment>
            </Card>
        </Grid>
    );
}

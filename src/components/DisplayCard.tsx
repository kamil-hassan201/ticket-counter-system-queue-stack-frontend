import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function DisplayCard() {
    return (
        <Box sx={{ width: "fit-content", mx: "auto", mt: 2 }}>
            <Card variant="outlined">
                <React.Fragment>
                    <CardContent>
                        <Typography variant="h6" component="div">
                            Now Serving: xxxx
                        </Typography>
                        <Typography variant="h6" component="div">
                            Last Number: xxxx
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            sx={{ mx: "auto" }}
                            variant="outlined"
                            size="medium"
                        >
                            Take a number
                        </Button>
                    </CardActions>
                </React.Fragment>
            </Card>
        </Box>
    );
}

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ENVIRONMENT from "../environment";

export default function DisplayCard() {
    const [cardData, setCardData] = React.useState({ serving: 0, last: 0 });
    const [newCard, setNewCard] = React.useState<number>();

    React.useEffect(() => {
        fetch(`${ENVIRONMENT.baseApi}/cards`)
            .then((res) => res.json())
            .then((res) => {
                setCardData(res);
            });
    }, [newCard]);

    const handleTakeANumber = () => {
        fetch(`${ENVIRONMENT.baseApi}/enqueue`)
            .then((res) => res.json())
            .then((res) => {
                setNewCard(res);
                alert("Your card number is: " + res);
            });
    };

    return (
        <Box sx={{ width: "fit-content", mx: "auto", mt: 2 }}>
            <Card variant="outlined">
                <React.Fragment>
                    <CardContent>
                        <Typography variant="h6" component="div">
                            Now Serving: {cardData?.serving}
                        </Typography>
                        <Typography variant="h6" component="div">
                            Last Number: {cardData?.last}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            sx={{ mx: "auto" }}
                            variant="outlined"
                            size="medium"
                            onClick={handleTakeANumber}
                        >
                            Take a number
                        </Button>
                    </CardActions>
                </React.Fragment>
            </Card>
        </Box>
    );
}

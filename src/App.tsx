import { Box } from "@mui/system";
import React from "react";
import CounterManagement from "./containers/ManagementView";
import CustomerView from "./containers/CustomerView";

function App() {
    return (
        <Box
            sx={{
                my: 15,
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <CustomerView />
            <CounterManagement />
        </Box>
    );
}

export default App;

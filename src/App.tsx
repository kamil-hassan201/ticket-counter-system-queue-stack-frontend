import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import ManagementView from "./containers/ManagementView";
import CustomerView from "./containers/CustomerView";
import ENVIRONMENT from "./environment";

function App() {
    const [counters, setCounters] = useState<TCounter[] | undefined>();

    useEffect(() => {
        fetch(`${ENVIRONMENT.baseApi}/counters`)
            .then((res) => res.json())
            .then((data) => setCounters(data));
    }, []);

    const handleGoOffline = (num: number) => {
        setCounters((prev) => {
            const newCounters = prev?.map((c) =>
                c.num === num ? { ...c, status: "offline" } : c
            );
            return newCounters;
        });
    };
    const handleGoOnline = (num: number) => {
        setCounters((prev) => {
            const newCounters = prev?.map((c) =>
                c.num === num ? { ...c, status: "online" } : c
            );
            return newCounters;
        });
    };

    return (
        <Box
            sx={{
                my: 15,
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <CustomerView counters={counters} />
            <ManagementView
                counters={counters}
                handleGoOffline={handleGoOffline}
                handleGoOnline={handleGoOnline}
            />
        </Box>
    );
}

export default App;

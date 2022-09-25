import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import ManagementView from "./containers/ManagementView";
import CustomerView from "./containers/CustomerView";
import ENVIRONMENT from "./environment";

function App() {
    const [data, setData] = useState<apiDataType>();
    const [counters, setCounters] = useState<TCounter[] | undefined>();

    useEffect(() => {
        fetch(`${ENVIRONMENT.baseApi}/data`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setCounters(data.counters);
            });
    }, [data, counters]);

    const handleGoOffline = (num: number) => {
        fetch(`${ENVIRONMENT.baseApi}/counterGoOffline/${num}`).then((res) =>
            res.json()
        );
        setCounters((prev) => {
            const newCounters = prev?.map((c) =>
                c.num === num ? { ...c, status: "offline" } : c
            );
            return newCounters;
        });
    };
    const handleGoOnline = (num: number) => {
        fetch(`${ENVIRONMENT.baseApi}/counterGoOnline/${num}`).then((res) =>
            res.json()
        );
        setCounters((prev) => {
            const newCounters = prev?.map((c) =>
                c.num === num ? { ...c, status: "online" } : c
            );
            return newCounters;
        });
    };

    const handleCompleteCurrent = (num: number) => {
        fetch(`${ENVIRONMENT.baseApi}/completeCurrent/${num}`).then((res) =>
            res.json()
        );
        setCounters((prev) => {
            const newCounters = prev?.map((c) =>
                c.num === num
                    ? { ...c, currentCard: null, status: "online" }
                    : c
            );
            return newCounters;
        });
    };

    const handleCallNext = (num: number) => {
        fetch(`${ENVIRONMENT.baseApi}/callNext/${num}`)
            .then((res) => res.json())
            .then((data) => data && alert(data));
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
            <CustomerView data={data} counters={counters} />
            <ManagementView
                counters={counters}
                handleGoOffline={handleGoOffline}
                handleGoOnline={handleGoOnline}
                handleCompleteCurrent={handleCompleteCurrent}
                handleCallNext={handleCallNext}
            />
        </Box>
    );
}

export default App;

interface TCounter {
    num: number;
    status: string;
    currentCard: number | null;
}

interface apiDataType {
    cards: number[];
    top: number;
    counters: TCounter[];
}

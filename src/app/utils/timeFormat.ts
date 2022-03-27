const checkDoubleNumber = (n: number): string => {
    return n < 10 ? '0' + n : n.toString();
};

export const timeFormat = (time: number): string => {
    if (!time) {
        return '00:00';
    }
    time = Math.round(time);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${checkDoubleNumber(minutes)}:${checkDoubleNumber(seconds)}`;
};



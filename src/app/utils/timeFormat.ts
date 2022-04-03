const convertToTwoValuedForm = (n: number): string => {
    return n < 10 ? '0' + n.toString() : n.toString();
};

export const timeFormat = (milliseconds: number): string => {
    if (!milliseconds) {
        return '00:00';
    }
    const seconds = Math.round(milliseconds / 1000);
    const resultMinutes = Math.floor(seconds / 60);
    const resultSeconds = seconds % 60;
    return `${convertToTwoValuedForm(resultMinutes)}:${convertToTwoValuedForm(resultSeconds)}`;
};



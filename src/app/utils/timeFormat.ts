const convertToTwoValuedForm = (n: number): string => {
    return n < 10 ? '0' + n.toString() : n.toString();
};

export const timeFormatSeconds = (seconds: number): string => {
    if (!seconds) {
        return '00:00';
    }
    const resultMinutes = Math.floor(seconds / 60);
    const resultSeconds = Math.round(seconds % 60);
    return `${convertToTwoValuedForm(resultMinutes)}:${convertToTwoValuedForm(resultSeconds)}`;
};

export const timeFormat = (milliseconds: number): string => {
    const seconds = Math.round(milliseconds / 1000);
    return timeFormatSeconds(seconds);
};






function formatNumber(number) {
    if (number >= 1000000000) {
        return (number / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (number >= 1000000) {
        return (number / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (number >= 1000) {
        return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return number;
}

export default formatNumber;

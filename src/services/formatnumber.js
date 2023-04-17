function formatNumber(num) {
    num = parseFloat(num).toFixed(2)
    let n = num.toString();
    let r = '';
    let x = 0;

    for (let i = n.length; i > 0; i--) {
        r += n.substr(i - 1, 1) + (x === 2 && i !== 1 ? '.' : '');
        x = x === 2 ? 0 : x + 1;
    }

    let result = r.split('').reverse().join('');
    result = result.replace("..", ".");
    return result;
}

export default formatNumber;
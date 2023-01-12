module.exports = function toReadable(number) {
    const arrFromOneToNineteen = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const arrTens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    const getOnes = num => num % 10;
    const getTens = num => Math.floor(num / 10);
    const getHundreds = num => Math.floor(num / 100);

    const removeFalse = str => str.split(' ').filter(el => el !== 'zero').join(' ');
    const getStrTens = num => `${arrTens[getTens(num)]} ${getOnes(num) !== 0 ? arrFromOneToNineteen[getOnes(num)] : 'zero'}`;
    const strHundreds = `${arrFromOneToNineteen[getHundreds(number)]} hundred`;

    if (number < 20) return arrFromOneToNineteen[number];
    if (number < 100) return removeFalse(getStrTens(number));
    if (number < 1000) {
        const tens = number % 100;
        if (tens < 20) return removeFalse(`${strHundreds} ${arrFromOneToNineteen[tens]}`);
        return removeFalse(`${strHundreds} ${getStrTens(tens)}`);
    }
}

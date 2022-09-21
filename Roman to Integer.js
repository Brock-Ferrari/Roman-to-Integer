function textProcessor()
{
    var newInt = romanToInt(document.getElementById('entry').value);
    document.getElementById('result').innerHTML = newInt;
    return;
}
function romanToInt(s)
{
    var runSum = 0;
    s.toUpperCase()
    .split('')
    .map
    ( (x, i, a) => 
        {
            switch (x)
            {
                case 'I':
                    if (a.indexOf('V', i) == i + 1 || a.indexOf('X', i) == i + 1)
                        runSum -= 1;
                    else
                        runSum += 1;
                    break;
                case 'V':
                    runSum += 5;
                    break;
                case 'X':
                    if (a.indexOf('L', i) == i + 1 || a.indexOf('C', i) == i + 1)
                        runSum -= 10;
                    else
                        runSum += 10;
                    break;
                case 'L':
                    runSum += 50;
                    break;
                case 'C':
                    if (a.indexOf('D', i) == i + 1 || a.indexOf('M', i) == i + 1)
                        runSum -= 100;
                    else
                        runSum += 100;
                    break;
                    break;
                case 'D':
                    runSum += 500;
                    break;
                case 'M':
                    runSum += 1000;
                default:
                    break;
            }
        }
    )
    return runSum;
}

function checkmat(pre, cur, repeat)
{
    if (pre === cur)
    {
        return repeat + 1
    }

    return 1
}

function largest_power(value)
{
    if (Number.isInteger(value) && value >= 1 && value <= 1000000)
    {
        test(value)
    }
    else
    {
        console.log('please input length 1-1000000')
    }
}

function test(value)
{
    const start = new Date

    const key = value
    let max_value = 0
    let repeat = 0

    for (var i = 0; i <= key; i++) 
    {
        var n = 2
        while (n <= key)
        {
            let power = Math.pow(i, n)

            if (power < key && power >= max_value)
            {
                repeat = checkmat(power, max_value, repeat)

                max_value = power

                n++
            }
            else if (power >= key)
            {
                n = key + 1
            }

            n++
        }
    }

    if (value <= 4) repeat = -1

    const end = new Date

    const use = end - start
    console.log(`-----------------------------`)
    console.log(`${key} = (${max_value},${repeat}) => usage: ${use} ms`)
}

largest_power(90)
largest_power(6)
largest_power(65)
largest_power(3)
largest_power(1)
largest_power(81)
largest_power(29)
largest_power(4)
largest_power(0)

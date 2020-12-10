/**
 * @param {number[]} bills
 * @return {boolean}
 */
function lemonadeChange(bills) {

    let $5 = 0
    let $10 = 0

    for (const bill of bills) {
        switch (bill) {
            case 5:
                $5++
                break
            case 10:
                $10++
                if ($5 === 0) {
                    return false
                }
                $5--
                break
            case 20:
                if ($5 === 0) {
                    return false
                }
                if ($10 === 0) {
                    if ($5 < 3) {
                        return false
                    } else {
                        $5 -= 3
                    }
                } else {
                    $10--
                    $5--
                }
                break
            default:
                throw new Error('Illegal bill')
        }
    }
    return true
}
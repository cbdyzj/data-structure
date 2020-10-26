// Flower type 1,2,3,4

/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
function gardenNoAdj(n, paths) {

    function isGoodAnswer(answer) {
        for (const path of paths) {
            const f0 = answer[path[0] - 1]
            const f1 = answer[path[1] - 1]
            if (f0 && f1 && f0 === f1) {
                return false
            }
        }
        return true
    }

    const answer = [1]
    while (true) {
        const ga = isGoodAnswer(answer)
        if (answer.length === n && ga) {
            return answer
        }
        // Look back
        else if (!ga) {

            const top = answer.pop()
            if (top < 4) {
                answer.push(top + 1)
            }
        }
        // Look forward
        else {
            answer.push(1)
        }
    }
}

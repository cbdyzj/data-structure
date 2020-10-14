// "12" => 2, 它可以解码为 "AB"（1 2）或者 "L"（12）。
// "226" => 3, 它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。
// "0" => 0
// "1" => 1
// "2" => 1

const decodingSet = Array.from({ length: 26 }).map((_, index) => String(index + 1))

/**
 * @param {string} s
 * @return {number}
 */
function numDecodings(s) {

    function getDecodingNum(s) {
        const cache = {}

        function searchDecodingNum(s) {
            if (!cache[s]) {
                cache[s] = searchDecodingNum0(s)
            }
            return cache[s]
        }

        function searchDecodingNum0(s) {
            if (!s) {
                return 1
            }

            const s0 = s.charAt(0)
            if (!decodingSet.includes(s0)) {
                return 0
            }
            const s1n = searchDecodingNum(s.substring(1, s.length))
            if (s.length === 1) {
                return s1n
            }
            const s01 = s.substring(0, 2)
            if (!decodingSet.includes(s01)) {
                return s1n
            }
            return s1n + searchDecodingNum(s.substring(2, s.length))
        }

        return searchDecodingNum(s)
    }

    return getDecodingNum(s)
}

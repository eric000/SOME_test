/**
 * @param {string} s
 * @return {string[]}
 */

var restoreIpAddresses = function (s) {
    let res = []
    const SEG_COUNT = 4;
    const segments = new Array(SEG_COUNT)
    const len = s.length
    const dfs = (segId, segStart) => {
        if (segId === SEG_COUNT) {
            if (segStart === len) {
                res.push(segments.join('.'))
            }
            return
        }

        if (segStart === len) {
            return
        }

        if (s[segStart] === '0') {
            segments[segId] = 0
            dfs(segId + 1, segStart + 1)
        }

        let addr = 0
        for (let i = segStart; i < len; i++) {
            addr = addr * 10 + Number(s[i])
            if (addr <= 0 || addr > 0xff) break

            segments[segId] = addr
            dfs(segId + 1, i + 1)
        }

    }
    dfs(0, 0)
    return res
};

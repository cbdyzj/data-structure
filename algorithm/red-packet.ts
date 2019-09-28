/**
 * 发红包
 * @param money 钱
 * @param share 份数
 */
function distributeRedPacket(money: number, share: number): string[] {
    if (!Number.isInteger(share) || share <= 0) {
        throw new Error('Illegal share')
    }
    if (money < 0 || money / share < 0.01) {
        throw new Error('Illegal money')
    }
    const ratios = Array.from({ length: share }).map(() => Math.random())
    const total = ratios.reduce((a, c) => a + c)
    return ratios.map(ratio => money * ratio / total)
        .map(it => it < 0.01 ? '0.01' : it.toFixed(2))
}

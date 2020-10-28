/*
 * @Author: xiancheng
 * @Date:   2020-10-28 23:53:17
 * @Last Modified by:   xiancheng
 * @Last Modified time: 2020-10-28 23:53:28
 */
/**给你一个整数数组 arr，请你帮忙统计数组中每个数的出现次数。

如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false。
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let a = arr.reduce((f, v) => f.set(v, (f.get(v) || 0) +1) ,new Map())
    return new Set(a.values()).size == a.size;
    };
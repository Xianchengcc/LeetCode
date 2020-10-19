/*
 * @Author: xiancheng
 * @Date:   2020-10-19 10:20:10
 * @Last Modified by:   xiancheng
 * @Last Modified time: 2020-10-19 10:20:27
 */
/**给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。

注意：如果对空文本输入退格字符，文本继续为空。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/backspace-string-compare
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    const arrS = [], arrT = [];
for(let char of S){
    char === '#' ? arrS.pop() : arrS.push(char);
}
for(let char of T){
    char === '#' ? arrT.pop() : arrT.push(char);
}
return arrS.join('') === arrT.join('');
};
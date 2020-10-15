/*
 * @Author: xiancheng
 * @Date:   2020-10-15 10:43:34
 * @Last Modified by:   xiancheng
 * @Last Modified time: 2020-10-15 10:43:40
 */
/**给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。

你可以按任意顺序返回答案。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-common-characters
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    var fi = [...A[0]],result=sum=[];
for(let j = 1;j<A.length;j++){
    a = A[j];
    for(let i = 0;i<a.length;i++){
        if(fi.includes(a[i])){
            sum.unshift(a[i]);
            fi.splice(fi.indexOf(a[i]),1);
        }
    }
    result=fi = sum,sum = [];
}
return result;
};
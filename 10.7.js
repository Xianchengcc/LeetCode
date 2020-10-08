/*
 * @Author: xiancheng
 * @Date:   2020-10-08 15:37:19
 * @Last Modified by:   xiancheng
 * @Last Modified time: 2020-10-08 15:38:06
 */
/**给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sort-colors
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    nums.sort((a,b) =>{
        return a-b;
    })
    return nums;
    };
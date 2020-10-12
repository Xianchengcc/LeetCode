/*
 * @Author: xiancheng
 * @Date:   2020-10-12 11:40:54
 * @Last Modified by:   xiancheng
 * @Last Modified time: 2020-10-12 11:41:11
 */
/**给你一棵所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值。
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    var min = Number.MAX_SAFE_INTEGER;
    var prvnum
    const intree = (root) => {
        if(root == null){
            return ;
        }
        intree(root.left);
        if(prvnum != undefined && min >(root.val - prvnum)){
            min = root.val - prvnum;
        }
        prvnum = root.val;
        intree (root.right);
    }
    intree(root);
    return min;
};
/*
 * @Author: xiancheng
 * @Date:   2020-10-27 23:36:02
 * @Last Modified by:   xiancheng
 * @Last Modified time: 2020-10-27 23:36:12
 */
/**给定一个二叉树，返回它的 前序 遍历。
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    return root ? [root.val].concat(preorderTraversal(root.left), preorderTraversal(root.right)) : []

};
/*
 * @Author: xiancheng
 * @Date:   2020-10-23 23:39:13
 * @Last Modified by:   xiancheng
 * @Last Modified time: 2020-10-23 23:39:24
 */
/**请判断一个链表是否为回文链表。
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    return d = n => !n || d(n.next) && n.val === head.val && (head = head.next), d(head)
    };
/*
 * @Author: xiancheng
 * @Date:   2020-10-18 23:51:44
 * @Last Modified by:   xiancheng
 * @Last Modified time: 2020-10-18 23:52:00
 */
/**给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var arr = [], p = head;
    while(head){
        arr.push(head);
        head = head.next;
    }
    return  arr[index = arr.length - n - 1] ? (arr[index].next = (arr[index + 2] || null), p) : p.next


};
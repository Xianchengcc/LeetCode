/*
 * @Author: xiancheng
 * @Date:   2020-10-13 12:13:06
 * @Last Modified by:   xiancheng
 * @Last Modified time: 2020-10-13 12:13:06
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head ||!head.next){
    return head;
    }
var fi = head,se = head.next,temp;
const renode = (f,s) =>{
    if(s.next && s.next.next){
        temp = s.next
        s.next = f;
        f.next = temp.next;
        renode(temp,temp.next)
    }else if(s || s.next){
        f.next = s.next;
        s.next = f;
        return;
    }
}
renode(fi,se)
return se;
};
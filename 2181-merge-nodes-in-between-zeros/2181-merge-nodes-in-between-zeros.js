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
var mergeNodes = function(head) {

    let modify = head.next;
    let curr = head.next;

    let sum = 0;

    while (curr) {

        if (curr.val !== 0) {
            sum += curr.val;
        } else {
            modify.val = sum;
            modify.next = curr.next;

            modify = modify.next;
            sum = 0;
        }

        curr = curr.next;
    }

    return head.next;
};
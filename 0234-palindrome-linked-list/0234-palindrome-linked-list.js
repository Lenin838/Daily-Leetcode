/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let fast = head;
    let slow = head;
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }

    let curr = slow;
    let next = null;
    let prev = null;
    while(curr){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    let first = head;
    let second = prev;
    while(second){
        if(first.val !== second.val){
            return false;
        }
        first = first.next;
        second = second.next;
    }
    return true;
};
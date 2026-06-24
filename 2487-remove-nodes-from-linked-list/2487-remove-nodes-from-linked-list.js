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
var removeNodes = function(head) {
    function reverse(head){
        if(!head) return;
        let prev = null;
        let curr = head;
        let next = null;
        while(curr){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
    head = reverse(head);
    let curr = head;
    let maxVal = head.val
    while(curr && curr.next){
        if(curr.next.val < maxVal){
            curr.next = curr.next.next
        }else{
            curr = curr.next
            maxVal = curr.val
        }
    }
    return reverse(head);
};
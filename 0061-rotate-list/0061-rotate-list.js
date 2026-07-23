/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
        if(!head || k===0) return head;
        let size=0
        let tep=head
        while(tep){
            size++
            tep=tep.next
        }
        k=k%size
    for(let i=0;i<k;i++){
        let curr = head;
        while(curr && curr.next.next){
            curr = curr.next
        }
        let value = curr.next;
        curr.next = null
        value.next = head;
        head = value;
    }
    return head
};
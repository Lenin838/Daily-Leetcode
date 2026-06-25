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
var insertGreatestCommonDivisors = function(head) {

    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    let curr = head;

    while (curr && curr.next) {

        let value = gcd(curr.val, curr.next.val);

        let node = new ListNode(value);

        node.next = curr.next;
        curr.next = node;

        curr = node.next;
    }

    return head;
};
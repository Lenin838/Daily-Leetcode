/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var reverseOddLevels = function(root) {
    let queue = [root];
    let level = 0;
    while(queue.length){
        let size = queue.length;
        let nodes = [];
        for(let i=0;i<size;i++){
            let node = queue.shift();
            nodes.push(node)

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        if(level%2===1){
            let left = 0;
            let right = nodes.length-1;
            while(left < right){
                [nodes[left].val,nodes[right].val] = [nodes[right].val,nodes[left].val]
                left++;
                right--;
            }
        }
        level++;
    }
    return root;
};
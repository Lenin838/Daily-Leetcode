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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    let stack = [[root,root.val]]

    while(stack.length){
        let [node,sum] = stack.pop();
        if(!node.right && !node.left && sum === targetSum) return true;
        if(node.right){
            stack.push([node.right,sum+node.right.val])
        }
        if(node.left){
            stack.push([node.left,sum+node.left.val])
        }
    }
    return false;
};
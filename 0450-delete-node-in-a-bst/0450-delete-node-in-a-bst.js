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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(!root) return null;
    if(key < root.val){
        root.left = deleteNode(root.left,key)
    }else if(key > root.val){
        root.right = deleteNode(root.right,key)
    }else{
        if(!root.left) return root.right;
        if(!root.right) return root.left;
        let sus = root.right;
        while(sus.left){
            sus = sus.left
        }
        root.val = sus.val
        root.right = deleteNode(root.right,sus.val)
    }
    return root;
};
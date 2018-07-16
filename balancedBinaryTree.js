/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var minDepth = function(root) {
    if (!root) return 0;
    return 1 + Math.min(minDepth(root.right), minDepth(root.left));
};

var maxDepth = function(root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.right), maxDepth(root.left));
}

var isBalanced = function(root) {
    if (!root) return true;
    console.log('max', maxDepth(root), 'min', minDepth(root), maxDepth(root) - minDepth(root) <= 1);
    return maxDepth(root) - minDepth(root) <= 1;
}


isBalanced({
  val: 3,
  right:{
     val: 20,
     right: { val: 7, right: null, left: null },
     left: { val: 15, right: null, left: null } },
  left: { val: 9, right: null, left: null } })

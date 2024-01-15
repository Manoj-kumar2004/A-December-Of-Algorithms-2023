class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function KDistanceNodes(root, target, k) {
    const result = [];
  
    function findKDistanceNodes(node, depth) {
      if (!node) {
        return;
      }
  
      if (depth === k) {
        result.push(node.value);
        return;
      }
  
      findKDistanceNodes(node.left, depth + 1);
      findKDistanceNodes(node.right, depth + 1);
    }
  
    function findTargetAndDepth(node) {
      if (!node) {
        return -1;
      }
  
      if (node.value === target) {
        findKDistanceNodes(node, 0);
        return 1;
      }
  
      const leftDepth = findTargetAndDepth(node.left);
      const rightDepth = findTargetAndDepth(node.right);
  
      if (leftDepth !== -1) {
        if (leftDepth === k) {
          result.push(node.value);
        }
        findKDistanceNodes(node.right, leftDepth + 1);
        return leftDepth + 1;
      }
  
      if (rightDepth !== -1) {
        if (rightDepth === k) {
          result.push(node.value);
        }
        findKDistanceNodes(node.left, rightDepth + 1);
        return rightDepth + 1;
      }
  
      return -1;
    }
  
    findTargetAndDepth(root);
  
    return result;
  }
  
  const root1 = new TreeNode(17);
  root1.left = new TreeNode(8);
  root1.right = new TreeNode(27);
  root1.left.left = new TreeNode(4);
  root1.left.right = new TreeNode(14);
  root1.left.right.left = new TreeNode(10);
  root1.left.right.right = new TreeNode(16);
  
  console.log(KDistanceNodes(root1, 8, 2));
  
  const root2 = new TreeNode(14);
  root2.left = new TreeNode(7);
  root2.right = new TreeNode(20);
  root2.left.left = new TreeNode(4);
  root2.left.right = new TreeNode(3);
  root2.left.right.left = new TreeNode(2);
  root2.left.right.left.left = new TreeNode(1);
  root2.left.right.left.right = new TreeNode(4);
  root2.right.right = new TreeNode(30);
  
  console.log(KDistanceNodes(root2, 7, 3));
  
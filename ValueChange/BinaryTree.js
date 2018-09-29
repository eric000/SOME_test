class BinaryTree {
  constructor () {
    this.root = null
  }
  Node (key) {
    return {
      key,
      left: null,
      right: null
    }
  }
  insertNode (node, newNode) {
    if (node.key < newNode.key) {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    } else {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    }
  }
  insert (key) {
    let newNode = this.Node(key)
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }
}

let nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13]
let binaryTree = new BinaryTree()
nodes.forEach(item => {
  binaryTree.insert(item)
})
console.log(JSON.stringify(binaryTree.root))

// 深度优先遍历二叉树

// 先序遍历（DLR）
let DLRList =[]
// 递归方式
function DLRfuc (node) {
  if (node) {
    DLRList.push(node.key)
    node.left && DLRfuc(node.left)
    node.right && DLRfuc(node.right)
  }
}

DLRfuc(binaryTree.root)
console.log(DLRList, 'DLR')

//非递归
function DLRfuc2 (node) {
  let result = []
  let tmpArr = []
  tmpArr.push(node)
  while(tmpArr.length) {
    let item = tmpArr.pop()
    result.push(item.key)
    item.right && tmpArr.push(item.right)
    item.left && tmpArr.push(item.left)
  }
  return result
}
console.log(DLRfuc2(binaryTree.root), 'DLR非递归')


// 广度搜索Breadth-First Search

function  bfs (node) {
  let queue = []
  let result = []
  let pointer = 0
  queue.push(node)
  while(pointer < queue.length) {
    let item = queue[pointer++]
    result.push(item.key)
    item.left && queue.push(item.left)
    item.right && queue.push(item.right)
  }
  return result
}
console.log(bfs(binaryTree.root), '广度搜索Breadth-First Search')
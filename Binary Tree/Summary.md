# Recursion vs Iteration

## Recursion
1. 先确定递归函数需要传入的参数（一般是根结点和一个用来装遍历结果的数组）和返回值一般都是void（因为返回值放入数组了）
2. 确定终止条件（一般都是根结点为null）
3. 确定单层递归的逻辑


## Iteration
1. 先序遍历的Iteration最好写，因为遍历顺序与处理顺序一致，只需要遍历一遍，边遍历边塞进stack边弹出放入答案，最后因为左右弹出和放入的顺序要颠倒，需要先放右再放左。
2. 中序遍历，遍历顺序是先根再左右，但是处理顺序是先左再根再右，根会被重复遍历两次，第二次遍历弹出时，才会处理它，然后遍历它的右边，把右边再当作根重复上述步骤。
3. 后序遍历，遍历顺序依然要先根再左右，但是根要最后处理，因此根要被遍历三遍，处理起来更加麻烦。因此可以把先序遍历（根左右）调换顺序（根右左），再reverse整个数组（左右根）。



## 先序遍历：
最容易的一种，因为遍历和处理顺序一致。

Recursion：

```javascript
var preorderTraversal = function(root) {
    
    const res = [];
    function traversal(root){
        if (root === null) {
            return;
        }
        res.push(root.val)
        traversal(root.left) // 此时根和左子结点全部写入res
        traversal(root.right) // 拿到最后一个根的右结点
    };
    
    traversal(root)
    return res
};
```

Iteration:

```javascript
var preorderTraversal = function(root) {
    const stack = [root]
    const result = []
    
    while(stack.length) {
        const temp = stack.pop()
        // 并不是说stack里面为空，而是有结点但是该结点为null
        if (temp === null) continue
        result.push(temp.val)
        if (temp.right) stack.push(temp.right)
        if (temp.left) stack.push(temp.left)
    }
    
    return result    
};
```


## 后序遍历

Recursion：

```javascript
var postorderTraversal = function(root) {
    const res = []
    
    function traversal(root) {
        if (root === null) return;
        traversal(root.left)
        traversal(root.right)
        res.push(root.val)
    }
    
    traversal(root)
    return res
};
```

Iteration:

```javascript
var postorderTraversal = function(root) {
    const stack = [root]
    const result = []
    
    while (stack.length) {
        const temp = stack.pop()
        if (temp === null) continue
        result.push(temp.val)
        stack.push(temp.left)
        stack.push(temp.right)
    }
    
    return result.reverse()
};
```


## 中序遍历

Recursion:

```javascript
var inorderTraversal = function(root) {
    const result = []
    
    function traversal(root) {
        if (root === null) return
        traversal(root.left)
        result.push(root.val)
        traversal(root.right)
    }
    
    traversal(root)
    return result
};
```

Iteration:
由于中序遍历的遍历顺序和处理顺序（存入数组）的顺序不一样，因此不能直接通过调换前序遍历的顺序来解.

易错点：

```javascript
var inorderTraversal = function(root) {
    const stack = []
    const arr = []
    let cur = root
    
    // 最顶端的root被弹出后要开始找root的右节点
    // 这时已经没有任何左边节点在stack里了，只有一个cur还存着根结点，因此stack有可能为空
    // 底层原因是，中序遍历和前序遍历不同，它的遍历顺序和操作顺序不一致
    while (stack.length || cur !==null) {
        if (cur !== null) {
            stack.push(cur)
            cur = cur.left
        } else {
            cur = stack.pop()
            arr.push(cur.val)
            cur = cur.right
        }
    }
    
    return arr
};
```



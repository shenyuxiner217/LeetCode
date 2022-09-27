## [⛸ 剑指 Offer 06. 从尾到头打印链表](https://leetcode.cn/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/)

通过这道简单的链表可以更加清晰了解recursion的传参和返回值问题：

## RECURSION VERSION1:
result作为全局变量数组，不需要当参数传入，也不需要被返回，只需要在临界的地方返回即可。

```javascript
var reversePrint = function(head) {
    const result = [];
    
    function recur(head) {
        if (!head) return;
        recur(head.next);
        result.push(head.val);
        return; // 这里也可以省略
    }
    recur(head);
    return result;
};
```

## RECURSION VERSION2:
如果把result作为recursion函数的一个变量传入方法，则与上述方法相似，因为这里的result也是一个全局变量。
所以修改后不需要赋值给他上一层的调用，但需要返回result结果。

```javascript
var reversePrint = function(head) {
    
    function recur(head, result) {
        if (!head) return result;
        recur(head.next, result);
        result.push(head.val);
        return result;
    }

    return recur(head, []);
};
```

## RECURSION VERSION3:
result如果作为recursion的一个变量，在recursion function内部创建，则需要返回出来外部才能拿到。
而返回值一定需要被一个变量接住，否则返回到上一层之后又变回空的result。由于这里是后序遍历，先在每一层创建空result，遍历到底部再操作，因此返回到上一层的result永远为空。
需要接住recursion的返回值一层层传上去，覆盖之前空的result数组，否则最后只会得到最后一个推入result的值。

错误写法：
```javascript
var reversePrint = function(head) {

    function recur(head) {
        if (!head) return;
        let result = []
        recur(head.next);
        result.push(head.val);
        return result; // 这里return到recur()调用的地方，但却没有接住，result还是空
    }

    return recur(head);
};
```

正确写法：
```javascript
var reversePrint = function(head) {
    
    function recur(head) {
        // 这里返回一个空数组，无法返回result因为还未被创建
        if (!head) return [];
        let result = recur(head.next);
        result.push(head.val);
        return result;
    }

    return recur(head);
};
```



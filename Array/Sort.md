## Quick Sort

每次随机选择一个数作为pivot，找到他正确的index，将剩余数组左右平分，分别对左右部分重复以上步骤。
时间复杂度不稳定，pivot选择会导致时间复杂度不同，因此我们采用随机选择pivot将时间复杂度降到nlogn。
空间复杂度为logn，是我们递归的次数，排序采用in-place的方式因此不需要额外空间。

```javascript
var sortArray = function(nums) {
    function recur(nums, left, right) {
        if (left === right) return nums;
        if (left < right) {
            let pivot = findPivot(nums, left, right);
            recur(nums, left, pivot - 1);
            recur(nums, pivot + 1, right);
        }
        return nums;
    }
    
    function findPivot(arr, left, right) {
        const pivot = Math.floor(Math.random() * (right - left + 1)) + left;
        swap(arr, left, pivot);
        let pivotIndex = left + 1;
        for (let i = left + 1; i <= right; i++) {
            if (arr[i] < arr[left]) {
                swap(arr, pivotIndex++, i);
            }
        }
        swap(arr, pivotIndex - 1, left);
        return pivotIndex - 1;
    }
    
    function swap(arr, l, r) {
        [arr[l], arr[r]] = [arr[r], arr[l]]
    }

    return recur(nums, 0, nums.length - 1);
};
```

## Merge Sort
归并排序的时间复杂度稳定为nlogn，因为每次都是从中间分。
与快排的区别是，快排可以看作先序遍历，先操作再往底走，而归并是后续遍历，先走到底再开始操作。

```javascript
var sortArray = function(nums) {
    
    function recur(nums, left, right) {
        if (left === right) return;
        if (left < right) {
            const mid = Math.floor(left + (right - left) / 2)
            recur(nums, left, mid);
            recur(nums, mid + 1, right);
            merge(nums, left, right, mid);
        }
    }
    
    function merge(nums, left, right, mid) {
        // 修改引用类型时一定要注意，这里传了nums，就不要用赋值语句
        // 赋值只是给了这个函数里的nums变量，用赋值语句修改引用类型无法改变函数外部nums的值
        // 两个sort好的array merge，需要一个新的array，否则第二个array上的第一个值没有被排序
        const temp = []
        let first = left;
        let second = mid + 1;
        while (first <= mid && second <= right) {
            if (nums[first] < nums[second]) {
                temp.push(nums[first++]);
            } else {
                temp.push(nums[second++]);
            }
        }
        // 这里不要写在while里，处理完了上面的出来再处理剩余情况！
        while (second <= right) {
            temp.push(nums[second++]);
        }
        while (first <= mid) {
            temp.push(nums[first++]);
        }
        // 虽然不知道为什么，但是别用concat+slice拼新的数组传值给原始数组，非常耗时！
        for (let i = left; i <= right; i++) {
            nums[i] = temp[i - left];
        }
    }
    
    recur(nums, 0, nums.length - 1);
    return nums;
};

```

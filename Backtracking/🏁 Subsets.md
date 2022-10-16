## [🥨 78. Subsets (Medium)](https://leetcode.com/problems/subsets/)

简单不用去重版本

```javascript
var subsets = function(nums) {
    let result = [];
    function recur(temp, index) {
        // 这题的难点在于结束条件：
        // 由于for循环限制了temp的取值，也就限制了长度，因此不需要限制结束条件
        result.push([...temp]);
        for (let i = index; i < nums.length; i++){
            temp.push(nums[i])
            recur(temp, i + 1);
            temp.pop();
        }
    }
    recur([], 0);
    return result;
};
```

## [💜 90. Subsets II](https://leetcode.com/problems/subsets/)

需要去重的版本

```javascript
var subsetsWithDup = function(nums) {
    let result = [], temp = [];
    nums.sort((a, b) => a - b);
    
    function recur(index) {
        result.push([...temp]);
        for (let i = index; i < nums.length; i++) {
            // 这一步是去重的关键：如果不是作为for循环的第一个，也就是这一层的第一个放进去的值，都不能和前一个相等
            if (i !== index && nums[i] === nums[i - 1]) continue;
            temp.push(nums[i]);
            recur(i + 1);
            temp.pop();
        }
    }
    recur(0);
    return result;
};
```

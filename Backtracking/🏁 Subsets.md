## [ð¥¨ 78. Subsets (Medium)](https://leetcode.com/problems/subsets/)

ç®åä¸ç¨å»éçæ¬

```javascript
var subsets = function(nums) {
    let result = [];
    function recur(temp, index) {
        // è¿é¢çé¾ç¹å¨äºç»ææ¡ä»¶ï¼
        // ç±äºforå¾ªç¯éå¶äºtempçåå¼ï¼ä¹å°±éå¶äºé¿åº¦ï¼å æ­¤ä¸éè¦éå¶ç»ææ¡ä»¶
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

## [ð 90. Subsets II](https://leetcode.com/problems/subsets/)

éè¦å»éççæ¬

```javascript
var subsetsWithDup = function(nums) {
    let result = [], temp = [];
    nums.sort((a, b) => a - b);
    
    function recur(index) {
        result.push([...temp]);
        for (let i = index; i < nums.length; i++) {
            // è¿ä¸æ­¥æ¯å»éçå³é®ï¼å¦æä¸æ¯ä½ä¸ºforå¾ªç¯çç¬¬ä¸ä¸ªï¼ä¹å°±æ¯è¿ä¸å±çç¬¬ä¸ä¸ªæ¾è¿å»çå¼ï¼é½ä¸è½ååä¸ä¸ªç¸ç­
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

# LeetCode


## Anagram 异构词

[242. Valid Anagram](https://leetcode.com/problems/valid-anagram/)

[49. Group Anagrams](https://leetcode.com/problems/group-anagrams/)

[438. Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)



特点：
1. 两个词构成的字符相同，因此Hash为核心，由于只用26个字母，可以用array优化map；
2. 两个词长度相等，因此可以考虑用滑动窗口；[438. Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)
3. 如果想用Unicode来解，注意Unicode只能区分单个字符，不能用来区分两个anagram。[49. Group Anagrams](https://leetcode.com/problems/group-anagrams/)

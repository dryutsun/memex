---
draft: false
date: 2022-08-10
gh_url: https://replit.com/@dryutsun/leetcode-parser#InputParser.js
deploy_url: https://replit.com/@dryutsun/leetcode-parser#InputParser.js
thumbnail: /projects/leetcode-parser-screencapture.png
project_name: LeetCode Local Test Parser
description: A small parser for a variety of algorithm website test formats.
stack:
    - VanillaJS
tags:
    - Parser
    - Testing
---

## SITUATION
While studying for algorithm interviews, I got tired of not being able to run leetcode test cases in my personal
environment.

## INFORMATION
- I had been reading [Douglas Crockford's](https://www.crockford.com/domjs.html) (Author of JSLint, JSON) essay on Top
  Down Operator Precedence. I had been exploring stack machines, DFA, building interpreters and parsing techniques.
- I figured it would be a good experiment in applying some of the things I learned while studying the above as well as
  my algorithms practice.
- I was also curious about the way that leetcode was building their test harnesses.

## ANALYSIS
- For the most part, coding problems  came in a few formats:

#### LeetCode Class and Method Form
```
["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
[[], [1], [2], [1], [3], [2], [2], [2], [2]]
```
#### LeetCode Single Function Form
```
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
```
#### Plaintext File Form (Hackerrank, CodeChef, Advent of Code)
Ex:
_The first line contains n, number of nodes in the tree. Each of the next n lines contains two integers, a b, where a is the index of left child, and b is the index of right child of ith node._

- Note: -1 is used to represent a null node.
- The next line contains an integer, t, the size of queries.
- Each of the next t lines contains an integer queries[i] , each being a value k

```
3
2 3
-1 -1
-1 -1
2
1
1
```

- The generic and consistent format of the LeetCode problems made the project seem feasible.

## DEVELOPMENT CHALLENGES & IMPLEMENTATION

While writing the Parser and the Runner a few things occured to me:

- I was only deserializing the testcases to run for a single language. In reality, LeetCode
  probably has an execution environment, per problem, per language. In other words, the way the test case was
  'represented' did not have much bearing on how it was run. 

I debated abandoning the project in this phase. **I understood that I was solving the wrong problem**

- Thinking more on the problem, it wasn't a problem of representation of data. For instance, you could write your own
  test case which conflicted with my theory. 

I believe that the correct problem to solve for this particular issue was to deserialize a javascript-formatted testcase into a variety of language representations. Sound familiar? **It's JSON**.

For instance, imagine we have a JS list `[1,2,3,null,null,4,5]` in a text file. Depending on how you read in the file,
it would come in via a 'readline' sort of interface. You would recieve a string representation of the array.

In python you could:
```python
import json
with open('test.txt', 'r') as file:
    test = file.read()
test = test.replace('null', 'None')
new_test = eval(test) # you could stop here
json_test = json.dumps(new_test)
```

I can only assume that leetcode has a more complex version of this in the backend.

## ...But when I thought about it a little more --

LeetCode often has test cases that are represented as arrays, but are actually trees. So there was in fact a larger rift
between the representation of the testcase (array) and the actual thing being tested (tree). In some cases, they would
represent the tree as an array (level order representation) and utilize indexes to encode the depth. But more often than
not you would recieve a testcase that looks like an array, when its actual data structure was anything but.

Which leads me to the other problem:
- Testcases have to be converted into their proper data-structure prior to being run. This means that the 'generic
  testcase', was actually being deserialized into each languages representations of that data-structure.

I took a fair stab at it, but it was at this point that I decided to pause before I got too caught in the weeds.


## CONCLUSION
- As a result, I learned a lot about serialization and deserialization between languages and how to think about reverse
  engineering a product.



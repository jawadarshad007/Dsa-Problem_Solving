# Time & Space Complexity — Beginner-Friendly DSA Notes

> **Goal:** Understand how to calculate Time Complexity (TC) and Space Complexity (SC), recognize common Big-O complexities, and analyze simple code confidently in DSA interviews.

---

## 1. What is Time Complexity?

**Time Complexity does NOT mean the actual time (seconds) a program takes to run.**

Instead, it describes **how the number of operations grows when the input size `n` grows**.

We usually write Time Complexity using **Big-O notation**, such as:

- `O(1)`
- `O(log n)`
- `O(n)`
- `O(n log n)`
- `O(n²)`
- `O(2ⁿ)`
- `O(n!)`

### Simple idea

Suppose an algorithm takes:

- `5` operations when `n = 1`
- `50` operations when `n = 10`
- `500` operations when `n = 100`

The number of operations grows roughly with `n`.

So we can say its complexity is **O(n)**.

### Why do we study Time Complexity?

There are two main reasons:

1. **Compare algorithms:** Decide which algorithm is more efficient.
2. **Build better systems:** Choose algorithms that work efficiently even when the input becomes very large.

---

# 2. What is Big-O Notation?

**Big-O notation describes the growth rate of an algorithm as the input size becomes large.**

For beginner-level DSA, Big-O is commonly used to discuss the **worst-case growth / upper bound** of an algorithm.

### Important rule

When simplifying Big-O:

1. **Ignore constants.**
2. **Keep the fastest-growing / largest term.**

### Example

Suppose the number of operations is:

```text
4n² + 3n + 2
```

We write:

```text
O(4n² + 3n + 2)
```

Ignore constants:

```text
O(n² + n + 1)
```

Keep the largest-growing term:

```text
O(n²)
```

### Why can we ignore constants?

Because Big-O focuses on **growth**, not exact operation counts.

For example:

```text
100n
```

and

```text
5n
```

are both:

```text
O(n)
```

The first may take more operations in practice, but both grow **linearly** as `n` increases.

---

# 3. Input Size `n`

`n` normally represents the **size of the input**.

For example:

### Array

```js
let arr = [10, 20, 30, 40, 50];
```

Here:

```text
n = 5
```

because there are 5 elements.

### String

```js
let str = "hello";
```

Here:

```text
n = 5
```

because there are 5 characters.

### Number

Sometimes `n` is simply the value we are processing:

```js
for (let i = 1; i <= n; i++) {
    console.log(i);
}
```

Here the loop runs according to the value of `n`.

---

# 4. How to Calculate Time Complexity

When analyzing code, ask:

> **"How many times can the important operation execute as `n` grows?"**

You do NOT need to count every CPU instruction.

Focus on the structure of the code.

## Quick rules

### Rule 1 — Simple statements

```js
let x = 10;
let y = 20;
let z = x + y;
```

These execute a fixed number of times.

```text
TC = O(1)
```

---

### Rule 2 — One loop from `1` to `n`

```js
for (let i = 1; i <= n; i++) {
    console.log(i);
}
```

The loop runs approximately `n` times.

```text
TC = O(n)
```

---

### Rule 3 — Two nested loops

```js
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        console.log(i, j);
    }
}
```

Outer loop:

```text
n times
```

Inner loop:

```text
n times for each outer iteration
```

Total:

```text
n × n = n²
```

Therefore:

```text
TC = O(n²)
```

---

### Rule 4 — Three nested loops

```js
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        for (let k = 0; k < n; k++) {
            console.log(i, j, k);
        }
    }
}
```

Total:

```text
n × n × n = n³
```

Therefore:

```text
TC = O(n³)
```

---

### Rule 5 — Consecutive loops are added, then simplified

```js
for (let i = 0; i < n; i++) {
    console.log(i);
}

for (let j = 0; j < n; j++) {
    console.log(j);
}
```

First loop:

```text
O(n)
```

Second loop:

```text
O(n)
```

Together:

```text
O(n) + O(n) = O(2n)
```

Ignore the constant `2`:

```text
O(n)
```

### Important

**Consecutive loops are added.**

**Nested loops are multiplied.**

---

# 5. O(1) — Constant Time Complexity

`O(1)` means the amount of work stays approximately the same, regardless of how large the input becomes.

### Example

```js
let n = 10;

let ans = n * (n + 1) / 2;

console.log(ans);
```

The formula directly calculates the answer.

It does NOT loop from `1` to `n`.

Whether:

```text
n = 10
```

or:

```text
n = 1,000,000
```

the formula still performs a fixed number of basic operations.

Therefore:

```text
TC = O(1)
```

### Another example

```js
let arr = [10, 20, 30, 40, 50];

console.log(arr[2]);
```

Accessing an array element by index is:

```text
O(1)
```

because we directly access the required position.

### Remember

> **Fixed amount of work → O(1)**

---

# 6. O(n) — Linear Time Complexity

`O(n)` means the amount of work grows **linearly** with the input size.

### Example

```js
let fact = 1;

for (let i = 1; i <= n; i++) {
    fact *= i;
}

console.log(fact);
```

If:

```text
n = 5
```

the loop runs 5 times.

If:

```text
n = 100
```

the loop runs 100 times.

If:

```text
n = 1,000
```

the loop runs 1,000 times.

Therefore:

```text
TC = O(n)
```

### Another common example

```js
for (let i = 0; i < n; i++) {
    console.log(arr[i]);
}
```

Every element is visited once:

```text
n elements → n operations
```

So:

```text
TC = O(n)
```

### Remember

> **One full pass through `n` elements → usually O(n)**

---

# 7. O(n²) — Quadratic Time Complexity

`O(n²)` commonly appears when we have **two nested loops**, where each loop runs `n` times.

### Example

```js
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        console.log(i, j);
    }
}
```

Count the work:

```text
Outer loop = n
Inner loop = n

Total = n × n
      = n²
```

Therefore:

```text
TC = O(n²)
```

### Example with numbers

If:

```text
n = 10
```

approximately:

```text
10 × 10 = 100
```

operations.

If:

```text
n = 100
```

approximately:

```text
100 × 100 = 10,000
```

operations.

The work grows very quickly.

### Common use

Nested loops are often found in:

- Comparing every pair
- Bubble Sort
- Selection Sort
- Simple matrix operations

### Remember

> **Two dependent nested `n` loops → O(n²)**

---

# 8. O(n³) — Cubic Time Complexity

`O(n³)` commonly appears with **three nested loops**.

### Example

```js
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        for (let k = 0; k < n; k++) {
            console.log(i, j, k);
        }
    }
}
```

Total work:

```text
n × n × n
= n³
```

Therefore:

```text
TC = O(n³)
```

### Example

For:

```text
n = 10
```

approximately:

```text
10³ = 1,000
```

iterations.

For:

```text
n = 100
```

approximately:

```text
100³ = 1,000,000
```

iterations.

### Remember

> **Three nested `n` loops → O(n³)**

---

# 9. O(log n) — Logarithmic Time Complexity

`O(log n)` is one of the most important complexities in DSA.

The key idea is:

> **The input size is repeatedly reduced by a constant factor, commonly half.**

For example:

```text
n
n/2
n/4
n/8
n/16
...
```

Every iteration cuts the remaining problem roughly in half.

## Example

Suppose:

```text
n = 16
```

After repeatedly dividing by 2:

```text
16 → 8 → 4 → 2 → 1
```

Only 4 divisions are needed.

That is why the number of operations grows like:

```text
log₂(n)
```

and we write:

```text
O(log n)
```

The base is usually omitted in Big-O because different constant bases differ only by a constant factor.

---

## Code Example

```js
let i = n;

while (i > 1) {
    i = Math.floor(i / 2);
}
```

Each iteration reduces the value approximately by half:

```text
n → n/2 → n/4 → n/8 → ...
```

Therefore:

```text
TC = O(log n)
```

## Most Important Recognition Trick

Whenever you see something like:

```js
i = i / 2;
```

or:

```js
i *= 2;
```

you should immediately **check for O(log n)**.

It is especially common when the problem size is repeatedly divided.

### Binary Search

Binary Search is the classic example.

Instead of checking every element, Binary Search:

1. Checks the middle.
2. Discards half of the search space.
3. Checks the middle of the remaining half.
4. Repeats.

Therefore:

```text
TC = O(log n)
```

### Remember

> **If the problem size becomes half (or another constant fraction) each iteration → usually O(log n).**

---

# 10. O(n log n) — Linearithmic Time Complexity

`O(n log n)` is very common in efficient sorting algorithms.

The basic idea is:

```text
n × log n
```

It often happens when an algorithm:

1. Divides the problem into smaller parts.
2. Performs `O(n)` work across each level.

### Classic Example: Merge Sort

Merge Sort repeatedly divides an array:

```text
n
↓
n/2 + n/2
↓
n/4 + n/4 + n/4 + n/4
↓
...
```

The number of levels is approximately:

```text
log n
```

At each level, the total work is approximately:

```text
n
```

So:

```text
n × log n
```

Therefore:

```text
TC = O(n log n)
```

### Remember

> **Divide into levels + O(n) work per level → often O(n log n).**

Common examples include:

- Merge Sort
- Heap Sort
- Many efficient comparison-based sorting approaches

---

# 11. O(2ⁿ) — Exponential Time Complexity

`O(2ⁿ)` grows extremely quickly.

A common example is a naive recursive Fibonacci algorithm.

### Example

```js
function fib(n) {
    if (n <= 1) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}
```

For each call, the function can create two more recursive calls:

```text
fib(n)
├── fib(n-1)
│   ├── fib(n-2)
│   └── ...
└── fib(n-2)
    ├── fib(n-3)
    └── ...
```

The number of calls grows very rapidly.

For the standard naive recursive Fibonacci implementation, the exact bound can be expressed more precisely using the Fibonacci sequence, but for beginner-level DSA it is commonly described as:

```text
O(2ⁿ)
```

### Why is it bad?

As `n` increases, the number of recursive calls explodes.

For example, conceptually:

```text
n increases by 1
→ many more function calls
```

This is why brute-force recursive solutions can become impractical for large inputs.

### Remember

> **When the number of possibilities/calls roughly doubles as `n` increases → think O(2ⁿ).**

---

# 12. O(n!) — Factorial Time Complexity

`O(n!)` grows even faster than `O(2ⁿ)`.

It commonly appears when an algorithm tries **every possible permutation**.

### Example idea

Suppose we have:

```text
A, B, C
```

Possible arrangements:

```text
ABC
ACB
BAC
BCA
CAB
CBA
```

There are:

```text
3! = 6
```

permutations.

For `n` elements:

```text
n!
```

possible permutations exist.

Therefore, an algorithm that checks every permutation can have:

```text
O(n!)
```

time complexity.

### Remember

> **Trying every permutation → often O(n!)**

---

# 13. Time Complexity — Best to Worst

A useful order to remember is:

```text
O(1)
   ↓
O(log n)
   ↓
O(n)
   ↓
O(n log n)
   ↓
O(n²)
   ↓
O(n³)
   ↓
O(2ⁿ)
   ↓
O(n!)
```

From **faster growth to slower growth**, we say:

```text
O(1) < O(log n) < O(n) < O(n log n)
    < O(n²) < O(n³) < O(2ⁿ) < O(n!)
```

This is a simplified ranking for comparing growth rates.

### Important

For large `n`, algorithms toward the top generally scale much better than algorithms toward the bottom.

---

# 14. Space Complexity

**Space Complexity** describes how much memory an algorithm needs as the input size grows.

When analyzing an algorithm, we are often interested in **auxiliary space**:

> The extra memory used by the algorithm, excluding the input itself when the problem convention treats the input as already given.

### Example: O(1) Extra Space

```js
function sum(a, b) {
    let result = a + b;
    return result;
}
```

Only a fixed number of extra variables are used.

Therefore:

```text
Auxiliary Space = O(1)
```

---

## Example: O(n) Extra Space

```js
function createArray(n) {
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(i);
    }

    return arr;
}
```

The new array grows with `n`.

If:

```text
n = 10
```

we store about 10 values.

If:

```text
n = 1,000
```

we store about 1,000 values.

Therefore:

```text
Auxiliary Space = O(n)
```

### Important

Time and Space Complexity are different:

```text
Time Complexity → How computation/work grows
Space Complexity → How extra memory grows
```

---

# 15. Time vs Space — Easy Example

Consider:

```js
function copyArray(arr) {
    let copy = [];

    for (let i = 0; i < arr.length; i++) {
        copy.push(arr[i]);
    }

    return copy;
}
```

### Time

We visit every element once:

```text
n elements
```

So:

```text
Time = O(n)
```

### Space

We create another array containing `n` elements:

```text
Space = O(n)
```

Therefore:

```text
Time  = O(n)
Space = O(n)
```

---

# 16. Prime Number Example — O(√n)

A common DSA example is checking whether a number is prime.

### Efficient approach

```js
function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}
```

The loop condition is:

```text
i * i <= n
```

This means:

```text
i <= √n
```

So the loop checks approximately:

```text
2, 3, 4, ..., √n
```

The number of iterations is proportional to `√n`.

Therefore:

```text
TC = O(√n)
```

### Why do we stop at √n?

If `n` has a factor larger than `√n`, its matching factor must be smaller than `√n`.

For example:

```text
36 = 4 × 9
```

One factor is below √36 = 6, while the other is above 6.

So once we have checked possible divisors up to √n, we have enough information to determine whether a divisor exists.

### Important pattern

Whenever you see:

```js
i * i <= n
```

or:

```js
i <= Math.sqrt(n)
```

think:

```text
O(√n)
```

---

# 17. Very Important Pattern: Loop Analysis

Learn to recognize these patterns quickly.

## Pattern 1 — `i++`

```js
for (let i = 0; i < n; i++) {
    // work
}
```

`i` increases one by one.

```text
O(n)
```

---

## Pattern 2 — `i += 2`

```js
for (let i = 0; i < n; i += 2) {
    // work
}
```

The loop runs approximately `n/2` times.

Big-O ignores the constant:

```text
O(n/2) = O(n)
```

So:

```text
O(n)
```

---

## Pattern 3 — `i *= 2`

```js
for (let i = 1; i < n; i *= 2) {
    // work
}
```

Values look like:

```text
1 → 2 → 4 → 8 → 16 → 32 → ...
```

The number of iterations is approximately:

```text
log₂(n)
```

Therefore:

```text
O(log n)
```

---

## Pattern 4 — `i /= 2`

```js
for (let i = n; i > 0; i = Math.floor(i / 2)) {
    // work
}
```

Values look like:

```text
n → n/2 → n/4 → n/8 → ...
```

Therefore:

```text
O(log n)
```

---

## Pattern 5 — Nested loops

```js
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        // work
    }
}
```

Multiply:

```text
n × n = n²
```

Therefore:

```text
O(n²)
```

---

# 18. Important Exception: Nested Loops Are Not Always O(n²)

Do NOT blindly say:

> "Two loops = O(n²)."

You must check how the loops depend on each other.

### Example

```js
for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
        console.log(i, j);
    }
}
```

The inner loop does not always run `n` times.

It runs:

```text
0 + 1 + 2 + 3 + ... + (n-1)
```

This sum is:

```text
n(n-1)/2
```

which simplifies to:

```text
O(n²)
```

So the answer is still:

```text
O(n²)
```

But the **reasoning** is important.

---

# 19. Another Important Example — O(n + m)

Suppose we have two different input sizes:

```js
function example(arr1, arr2) {
    for (let x of arr1) {
        console.log(x);
    }

    for (let y of arr2) {
        console.log(y);
    }
}
```

If:

```text
arr1 size = n
arr2 size = m
```

Then:

```text
First loop  = O(n)
Second loop = O(m)
```

Total:

```text
O(n + m)
```

Do NOT automatically convert this to `O(n²)`.

If `n` and `m` are independent input sizes, keep both.

---

# 20. Nested Different Input Sizes — O(n × m)

Consider:

```js
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        console.log(i, j);
    }
}
```

Outer loop:

```text
n
```

Inner loop:

```text
m
```

Total:

```text
n × m
```

Therefore:

```text
TC = O(nm)
```

---

# 21. Best Case, Average Case, and Worst Case

An algorithm can behave differently for different inputs.

### Best Case

The most favorable input.

### Average Case

Typical/expected behavior over inputs.

### Worst Case

The most unfavorable input.

In beginner DSA discussions, **Big-O is commonly used to describe an upper bound / worst-case growth**.

### Example: Linear Search

```js
function search(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }

    return -1;
}
```

If the target is the first element:

```text
Best Case = O(1)
```

If the target is at the end or does not exist:

```text
Worst Case = O(n)
```

For interviews, always pay attention to whether the interviewer asks for:

```text
Best Case
Average Case
Worst Case
```

---

# 22. Common Mistakes Beginners Make

## Mistake 1 — Counting actual seconds

Wrong idea:

> "This code takes 0.5 seconds, so its complexity is O(0.5)."

No.

Big-O is about **growth as input size changes**.

---

## Mistake 2 — Thinking constants matter

```text
O(100n)
```

is:

```text
O(n)
```

---

## Mistake 3 — Keeping every term

```text
O(n² + n + 10)
```

becomes:

```text
O(n²)
```

because `n²` grows faster.

---

## Mistake 4 — Assuming every nested loop is O(n²)

Check the number of iterations carefully.

---

## Mistake 5 — Forgetting recursive calls

Recursion can create many function calls.

Always inspect:

- How many recursive calls are made?
- How does the input size change?
- Is there repeated work?
- Is there memoization/dynamic programming?

---

## Mistake 6 — Confusing Time and Space

```text
Time → computation/work
Space → extra memory
```

---

# 23. Quick Big-O Cheat Sheet

| Complexity | Name | Easy Recognition |
|---|---|---|
| `O(1)` | Constant | Fixed number of operations |
| `O(log n)` | Logarithmic | Input repeatedly divided by a constant |
| `O(√n)` | Square Root | Loop up to `√n`, e.g. prime check |
| `O(n)` | Linear | One pass through `n` items |
| `O(n log n)` | Linearithmic | Divide + linear work per level |
| `O(n²)` | Quadratic | Two dependent nested loops |
| `O(n³)` | Cubic | Three dependent nested loops |
| `O(2ⁿ)` | Exponential | Branching brute-force recursion/subsets |
| `O(n!)` | Factorial | Trying all permutations |

---

# 24. How to Analyze Code in an Interview

When an interviewer gives you code, use this process.

## Step 1 — Identify the input size

Ask:

```text
What does n represent?
```

For an array:

```text
n = number of elements
```

For a string:

```text
n = number of characters
```

---

## Step 2 — Find loops

Check:

```text
How many times does each loop run?
```

Look at:

```text
i++
i += 2
i *= 2
i /= 2
```

These patterns tell you how the number of iterations grows.

---

## Step 3 — Check nesting

Ask:

> Are the loops inside each other?

If yes, their work may multiply.

Example:

```text
n × n = n²
```

---

## Step 4 — Check consecutive sections

If code has:

```text
O(n) + O(n²)
```

keep the dominant term:

```text
O(n²)
```

---

## Step 5 — Check whether input is shrinking

If you see:

```text
n → n/2 → n/4 → ...
```

think:

```text
O(log n)
```

---

## Step 6 — Check recursion

Ask:

```text
How many recursive calls?
How much does n decrease?
Is work repeated?
```

This is especially important for:

- Fibonacci
- Subsets
- Permutations
- Backtracking

---

## Step 7 — Analyze extra memory

Ask:

> "Does the algorithm create an array, object, map, set, stack, or other data structure whose size grows with `n`?"

If yes, that may contribute:

```text
O(n)
```

space.

---

# 25. Practice Examples

Try to calculate the complexity **before looking at the answers**.

---

## Question 1

```js
let x = arr[0];
console.log(x);
```

### Answer

```text
Time = O(1)
Space = O(1)
```

---

## Question 2

```js
for (let i = 0; i < n; i++) {
    console.log(i);
}
```

### Answer

```text
Time = O(n)
```

---

## Question 3

```js
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        console.log(i, j);
    }
}
```

### Answer

```text
Time = O(n²)
```

---

## Question 4

```js
for (let i = 1; i < n; i *= 2) {
    console.log(i);
}
```

### Answer

```text
Time = O(log n)
```

---

## Question 5

```js
for (let i = 0; i < n; i++) {
    console.log(i);
}

for (let j = 0; j < n; j++) {
    console.log(j);
}
```

### Answer

```text
O(n) + O(n)
= O(2n)
= O(n)
```

---

## Question 6

```js
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        console.log(i, j);
    }
}
```

### Answer

```text
Time = O(nm)
```

---

## Question 7

```js
for (let i = 2; i * i <= n; i++) {
    console.log(i);
}
```

### Answer

```text
Time = O(√n)
```

---

# 26. Final Mental Model

If you remember only these patterns, you can solve many beginner DSA complexity questions:

```text
Fixed work
    ↓
O(1)

One loop from 1 to n
    ↓
O(n)

Two nested n loops
    ↓
O(n²)

Three nested n loops
    ↓
O(n³)

Input becomes half every iteration
    ↓
O(log n)

n work at each of log n levels
    ↓
O(n log n)

Branching into roughly 2 possibilities repeatedly
    ↓
O(2ⁿ)

Try every permutation
    ↓
O(n!)

Loop only up to √n
    ↓
O(√n)
```

## Golden Rules

### Rule 1

**Ignore constants.**

```text
O(5n) → O(n)
```

### Rule 2

**Keep the dominant term.**

```text
O(n² + n + 1) → O(n²)
```

### Rule 3

**Consecutive work is added.**

```text
O(n) + O(n) = O(n)
```

### Rule 4

**Nested independent work is multiplied.**

```text
O(n) × O(n) = O(n²)
```

### Rule 5

**Repeatedly dividing the input → think logarithmic.**

```text
n → n/2 → n/4 → n/8
```

```text
O(log n)
```

### Rule 6

**Always check space separately.**

An algorithm can have:

```text
Time = O(n)
Space = O(1)
```

or:

```text
Time = O(n)
Space = O(n)
```

These are different measurements.

---

# 27. Interview-Ready One-Minute Revision

Before a DSA interview, remember:

```text
O(1)       → constant work
O(log n)   → repeatedly divide/shrink input
O(√n)      → loop up to square root
O(n)       → one full pass
O(n log n) → divide + linear work per level
O(n²)      → two nested loops
O(n³)      → three nested loops
O(2ⁿ)      → exponential branching
O(n!)      → permutations / all arrangements
```

And when simplifying:

```text
Ignore constants.
Keep the fastest-growing term.
Add consecutive sections.
Multiply nested work.
Analyze recursion carefully.
Analyze extra memory separately.
```

---

## Final Example

Consider:

```js
function example(n) {

    // O(1)
    let x = 10;

    // O(n)
    for (let i = 0; i < n; i++) {
        console.log(i);
    }

    // O(n²)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}
```

Break it down:

```text
O(1) + O(n) + O(n²)
```

Keep the largest-growing term:

```text
O(n²)
```

Therefore:

```text
Time Complexity = O(n²)
```

If the function uses only a fixed number of extra variables and does not create an `n`-sized data structure:

```text
Auxiliary Space = O(1)
```

### Final Answer

```text
TC = O(n²)
SC = O(1)
```

That is the basic method you should use to analyze code in DSA interviews.

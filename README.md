# Incorrect Null Check in JavaScript Function

This repository demonstrates a common error in JavaScript: using loose equality (`==`) instead of strict equality (`===`) when checking for `null`. The `foo` function incorrectly handles `null` inputs, potentially leading to unexpected behavior or errors.

## Bug

The `bug.js` file contains the faulty function `foo`.  It attempts to check if the input `x` is `null` using `x == null`. This loose equality check will return `true` not only when `x` is `null`, but also when `x` is `0` or `false`.

## Solution

The `bugSolution.js` file provides the corrected function. It uses strict equality (`x === null`) to accurately check for `null`, avoiding the issues caused by loose equality.

## How to Run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in a JavaScript environment (browser console, Node.js, etc.).
3. Call the `foo` function (original and corrected versions) with different inputs to observe the difference in behavior.
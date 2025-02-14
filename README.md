# React 19 useEffect Infinite Loop Bug

This repository demonstrates a potential infinite loop bug in React 19's `useEffect` hook and provides a solution.

## Bug Description

The bug occurs when an effect's state update depends on a value modified within the same effect, causing continuous renders and potentially crashing the application.

## How to Reproduce

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the console output and notice the infinite loop.

## Solution

The solution involves refactoring the effect to avoid the circular dependency. We can use a stale closure to check against the previous count value and conditionally prevent a re-render if the count hasn't actually changed. 

## Additional Notes

This issue highlights the importance of understanding the behavior of `useEffect` and the potential pitfalls of creating dependencies within the effect.
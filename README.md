# What are hooks?  
  - New React API (in v16.8.0, released today!) 
  - Allows your function components to be stateful
  - Replace existing ways of sharing stateful behavior in React Components
    - Render Properties & Higher-Order Components (see https://react-patterns.com)
  - For the most part, replace class components 
 
# Example 
  - Let's refactor a class component to use hooks
  
# Why should you care?
  - The React team suggests using Hooks for new development
  - Hooks are backwards-compatible and can coexist with existing code
  - No need to rewrite existing code
  - ⚠️ Function components may have side-effects now!

# Testing code with hooks
  - should have no impact, if you're using behavioral testing
  - Check out [react-testing-library](https://github.com/kentcdodds/react-testing-library)
  
# Rules of Hooks
  - Call Hooks only at the top level of your function components
  - Why?

# More
  - Other hooks
    - `useReducer`
    - `useContext` 
    - ...
  - Check out the [official React docs](https://reactjs.org/docs/hooks-intro.html)

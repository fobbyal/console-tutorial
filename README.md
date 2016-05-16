# React-Redux DEV Environment

This project is intended to be the swiss army knife of React+Redux development environments.


## Why Another Boilerplate for React? What problem(s) does this solve
I ran into a problem with setting up my development environment. [react-transform-hmr](https://github.com/gaearon/react-transform-hmr) Currently does not support pure functional React components that was introduced in React 1.4. This created a problems for teams that are trying to adapt to the recommend way of creating stateless components. Hot module reloading worked before and it no longer works now. So I created this module with the intention that you can switch between
hot-module-reload and live-load. Then it got me thinking. There are a lot of Boilerplates out there but there are no such project that gives me the option of switching between different tools.


## Project Status

### Devloper Experience
- [x] Redux Dev Tools
- [x] Dynamic Routes using React-Router
- [x] Hot module reload for redux/pure functional components

### Production deployment
- [ ] Code Spliting 
- [ ] CSS Module
- [ ] Post CSS
- [ ] images loader


### Testing
- [ ] Unit Test 
- [ ] Coverage

### Basic Components 
- [x] Universal Selector 
- [ ] Auto Complete Input 
- [ ] Date Picker with timezone support
- [ ] Time Picker with timezone support
- [ ] Excel like table-grid with dynamic range of functions (header grouping, freezing columns and row, filtering and sorting) this is in progress.. have made the decision to go with fixed-data-table

### In Progress
* Excel like table-grid:
  * React-Select does not play well with fixed-data-table due to issues of stacking context. Going to cutomize react-select 
  * missing selection indicator
* Directory structure: Have not yet found a good way to structure code
* File Naming convention

### Maybe Features
* Option to configure redux dev tool

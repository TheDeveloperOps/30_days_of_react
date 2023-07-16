## DAY_21 
## Date 16 July 2023 

# REACT HOOKS 

**Hooks are a new addition in React 16.8. They allow you use state, life cycle methods and other React features without writing a class component. If we are using hooks we can have only a functional component in the entire application.Hooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own. This day we see all built-in Hooks in React.**

## VARIOUS HOOKS
- STATE HOOKS 
- CONTEXT HOOKS 
- REF HOOKS 
- EFFECT HOOKS 
- PERFORMANCE HOOKS 


## STATE HOOKS 
**State lets a component "remember" information like user input. For example, a form component can use state to store the input value, while an image gallery component can use state to store the selected image index. To add state to a component we can use either of these hooks `useState`( declares a state variable that you can update directly) and `useReducer` (declares a state variable with the update logic inside a reducer function)**

*useState declaratoin*
```
function ImageGallery(){
    const [ index,setIndex] = useState(0);
}
```

*Example for useState for increasing the count variable in the page*
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <title>COUNTER</title>
</head>
<body>
    <h1>COUNT</h1>
    <div id="app"></div>
    <script type="text/babel">
      const App=()=>{
        const [count,setCount] = React.useState(0)
        return(
          <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>increment</button>
          </div>
        )
      }
      const rootElement = ReactDOM.createRoot(document.getElementById('app'));
      rootElement.render(<App />);
    </script>
    <div>
        <footer class="foot">&copy; 2023 @BalaTheDeveloperOps</footer>
    </div>
</body>
</html>

```
*Output of the above*
![Alt text](image.png)
![counter](https://github.com/TheDeveloperOps/30_days_of_react/assets/82383377/a4b325fe-bb11-47e8-a1a4-73bdeb992bba)


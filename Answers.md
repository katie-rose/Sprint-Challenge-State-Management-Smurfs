1. What problem does the context API help solve?
Context API is a way for a child component to access a value in a parent component and helps avoid prop drilling as well. 

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are payloads of information that send data from your application to your store. They are the only source of information for the store.

Reducers specify how the application's state changes in response to actions sent to the store.

A store is the "single source of truth" because it holds the state tree of your application which represents the entire state of a Redux application. The only way to change the state inside it is to dispatch an action on it.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Your application state is global, and your component state is local. 

Application state is better for big applications due to it's ability for components to access state anywhere. Component state is fine for smaller applications due to the need of passing updates down to children via props. 

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`? 
Redux-thunk is middleware that allows Redux to look at every action that passes through the system, and if it’s a function, it calls that function. 

5. What is your favorite state management system you've learned and this sprint? Please explain why!
Hooks. It's easy to read and see what is going on. It's easy to reference. 
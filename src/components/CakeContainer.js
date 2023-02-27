import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.numOfCakes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

/* 
 We use the store state and dispatch actions in 3 steps:
 * Step 1: Define new function called by convention "mapStateToProps"
 This function gets redux state as the parameter and returns an object that contains properties we can use in the component by: 
 1. connecting mapStateToProps to component using connect function
 2. passing props param in the component

 In above example, we only want to use numOfCakes property from the state/store.

 Note: In the official react-redux documentatuion, they maintain a separate file called "Selectors". Just like Actions and Reducers there are Selectors.
 Selectors basically return some state information from the redux store. In our example selecting no. of cakes is pretty state forward i.e. state.numOfCakes.
 However, in larger applications we might perform some data transformation and select only what is required. 
 So, instead of writing couple of lines of code in mapStateToProps function it is extracted into the separate file called Selectors.

 * Step 2: Define new function called by convention "mapDispatchToProps"
 This function gets redux's dispatch method as the parameter and again returns an object. 
 
 const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  };
 };

 In the above mapDispatchToProps example, we made a key buyCake for calling dispatch. This key will be available to component by:
 1. connecting mapStateToProps to component using connect function
 2. passing props param in the component

 Then we can call props.buyCake() to invoke dispatch function from the component.

 * Step 3: Connect the 2 functions mapStateToProps and mapDispatchToProps with the react component.
 For this we use the connect function or the connect Higher Order Component from the react-redux library.

 Now our component will receive additional props i.e. keys from object returned by mapStateToProps and mapDispatchToProps.
 In above example there are 2 additional props namely numOfCakes and buyCake.

 * function CakeContainer(props) 
 can also be written as
 * function CakeContainer({numOfCakes, buyCake}) 
*/

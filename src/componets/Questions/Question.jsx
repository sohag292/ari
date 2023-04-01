import React from "react";
import './Question'
const Question = () => {
  return (
    <div>
          <div className="question">
      <h3>1. Props vs State</h3>
      <p>props:
        Data from props is read only cannot be modified. It is immutable
        state:
        Data can be modified within component but cannot be accessed from outside. It is mutable.</p>
      <h3>2. How does useState work ?</h3>
      <p>The state is a built-in React object. It returns an array with two value the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the function is called.
        purpose of useEffect other than fetching data</p>
      <h3>3.Purpose of useEffect other than fetching data ?</h3>
      <p>Updating the document title based on state or props.

        Handling browser or network events.

        Updating global state outside of React.

        Animating component transitions.

        Integrating with third-party libraries.

        Updating the URL or navigating to a different page.</p>
      <h3>4. How Does React work ?</h3>
      <p> React work similarly as JavaScript functions. It accepts arbitrary inputs that is called properties. In React We can create a representation of a DOM node by declaring the Element function.</p>

    </div>
    </div>
  );
};

export default Question;

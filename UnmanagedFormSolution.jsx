'use strict';

function UnmanagedForm() {
  function submitForm(event) {
    // Capture the input value
    const name = document.getElementById('name').value;

    // Set the innerHTML of the span to the input value
    document.getElementById('name-span').innerHTML = name;
    
    // Prevent the form from submitting
    event.preventDefault();
  }
  
  return (
    <>
      <form onSubmit={submitForm}>
        <label>Name: </label>
        <input id="name" type="text" />
        <button>Submit</button>
      </form>
      <p>
        My name is <span id="name-span"></span>
      </p>
    </>
  );
}

ReactDOM.render(<UnmanagedForm />, document.getElementById('UnmanagedForm'));

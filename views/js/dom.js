const home = `
Click on the Operation you wish to do:-
<button id="insert" onclick="insertForm()">Insert </button>
<button id="find"> Find </button>
<button id="update">Update</button>
<button id="delete">Delete</button>
<button id="view_all">Show All</button>
`
const insert = `
    <form action = "insert" method="POST">
        <input type="text" name="Name" placeholder="Enter Name">
        <input type="date" name="Dob" >
        <button id='add_number' type="button" onclick='addNumber()'>ADD NUMBER</button>
        <button id='add_email' type="button" onclick='addEmail()'>ADD EMAIL</button>
        <div id='numbers'>
        </div>
        <div id='emails'>
        </div>
        <button type='submit'>INSERT</button>
    </form>
`
const find =`
    <form action ="find"  method="POST">
        <input type = "text" name="Search" placeholder=" @ Seach in Contacts">
        <select name='type'>
            <option value='name'>By Name</option>
            <option value='number'>By Number</option>
            <option value='email'>By Email</option>
        </select>
        <button type='submit'>FIND</button>
`
const backButton = "<button type='button' onclick='location.reload()' >BACK </button>" 
// function updateForm();
// function deleteForm();
// function showForm();

// addNumber and addEmail append an input tag in divs of id numbers and emails respectively.
function addNumber()
{
    const inputNumberTag = "<input type='number' name='ContactNumbers' placeholder='Enter Number'/>"
    document.getElementById('numbers').innerHTML += inputNumberTag + '<br/>'
}
function addEmail()
{
    const inputEmailTag = "<input type='email' name='Emails' placeholder='Enter Email'/>" 
    document.getElementById('emails').innerHTML += inputEmailTag + '<br/>'
}

function insertForm()
{
    document.getElementById('main').innerHTML = insert + "<br/>" + backButton
}
function findForm()
{
    document.getElementById('main').innerHTML = find + "</br>" + backButton
}

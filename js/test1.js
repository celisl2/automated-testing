import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';

//fixture declaration 
fixture('fx').page('127.0.0.1:5500/public/index.html');

const getValue = ClientFunction(key => {
    return localStorage.getItem(key)
});

const setValue = ClientFunction((key, value) => {
    localStorage.setItem(key, value);
});


//* Test for text input

 //test controller (t in this instance) used to access the test run API
test('test1', async t => {
    
    await setValue("name", 'Laura');
    //await Cookies.set('name', 'Laura');
    await t
        .typeText('#developer-name', 'Laura')
        .wait(2000);
        //const location = await t.eval(() => window.location);
});

//* enables human readability lol
setTimeout(function() {
    console.log("test one completed");
}, 2000);

//* Test for checkboxes
    //can test for more too
test('test2', async t => {
    await t
        .click('#background-parallel-testing')
        .wait(2000)
        .click('#remote-testing')
        .wait(2000);
});

setTimeout(function() {
    console.log("test two completed");
}, 2000);

//* Test for radio
test('test3', async t => {
    await t
        .click('#macos')
        .wait(2000);
});

setTimeout(function() {
    console.log("test three completed");
}, 2000);

//* Test for dropdown
const optionSelect = Selector('#preferred-interface');

const optionTarget = optionSelect.find('option');

test('test4', async t => {
    await t
        .click(optionSelect)
        .click(optionTarget.withText('JavaScript API'))
        .expect(optionSelect.value).eql('JavaScript API');
});

setTimeout(function() {
    console.log("test four completed" + getValue("name")[0] + " -- " + getValue("name")[1]);
}, 2000);

test('test5', async t => {
    await t
        .click('#tried-test-cafe')
        .typeText('#comments', 'testcafe is cool tbh')
        .wait(1000)
        .click("#submit-button")
        .wait(2000);
});

setTimeout(function() {
    console.log(getValue("name"));
}, 2000);

//* start of test two for multipage tests

test('test-page2', async t => {
    await t 
        .typeText("#developer-name", 'Laura')
        .wait(2000);
})





/*

 Local Storage 101
    localStorage -> returns a storage object and will store stuff as string even if you dont store it as a string
        .setItem -> takes in 2 args [key, value]
        .removeItem -> takes in 1 arg [item name to remove]
        .getItem -> will give value when you pass in a key
            localStorage.getItem("key of what you want back")
        .key -> takes in an argument which is the index of what was stored loccally & it returns the value of the          indexed key provided as an argument.
        EX --
           1 - Get the elements 
                    document.getElementById("") 
            2 - Add form values to localStorage
                    2.a  - when submit is clicked call a function
                            IDofButton.onclick = function () {}
                        2.a.a - store values from form 
                            ** make sure things were submited **
                                IDofInput.value - will give you the value

                                this will help put on how to share data accross pages
                                https://stackoverflow.com/questions/38473924/populate-html-form-with-data-saved-on-local-storage

*/
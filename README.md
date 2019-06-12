# automated-testing
---- html ---
<!DOCTYPE html>
    <html>
        <head>
            <title>Test Cafe test</title>
            <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="../styles/styles.css">
        </head>
        <body>
            <header>
                <h1>Testing Enviroment</h1>
            </header>
            <form action="#" id="main-form">
                <div class="test-area-one">
                    <div class="section-one">
                        <fieldset>
                            <legend>Your name:</legend>
                            <input id="developer-name" name="name" type="text" />
                            <input type="button" id="populate" value="Populate">
                        </fieldset>
                        <fieldset>
                            <legend>Which features are important to you:</legend>
                            <p><label for="remote-testing"><input type="checkbox" name="remote" id="remote-testing">Support for testing on remote devices</label></p>
                            <p><label for="reusing-js-code"><input type="checkbox" name="re-using" id="reusing-js-code">Re-using existing JavaScript code for testing</label></p>
                            <p><label for="background-parallel-testing"><input type="checkbox" name="background" id="background-parallel-testing">Running tests in background and/or in parallel in multiple browsers</label></p>
                            <p><label for="continuous-integration-embedding"><input type="checkbox" name="CI" id="continuous-integration-embedding">Easy embedding into a Continuous integration system</label></p>
                            <p><label for="traffic-markup-analysis"><input type="checkbox" name="analysis" id="traffic-markup-analysis">Advanced traffic and markup analysis</label></p>
                        </fieldset>
                    </div>
                    <div class="section-two">
                        <fieldset>
                            <legend>What is your primary Operating System:</legend>
                            <p><label for="windows"><input type="radio" name="os" id="windows" value="Windows">Windows</label></p>
                            <p><label for="macos"><input type="radio" name="os" id="macos" value="MacOS">MacOS</label></p>
                            <p><label for="linux"><input type="radio" name="os" id="linux" value="Linux">Linux</label></p>
                        </fieldset>
                
                        <fieldset>
                            <legend>Which TestCafe interface do you use:</legend>
                            <select id="preferred-interface" name="preferred-interface">
                                <option>Command Line</option>
                                <option>JavaScript API</option>
                                <option>Both</option>
                            </select>
                        </fieldset>
                    </div>
                </div>
                <div class="test-area-two">
                    <fieldset id="tried-section">
                        <label for="tried-test-cafe"><input type="checkbox" name="tried-test-cafe" id="tried-test-cafe">I have tried TestCafe</label>
                    </fieldset>
            
                    <fieldset>
                        <legend>Please let us know what you think:</legend>
                        <textarea id="comments" name="comments" disabled></textarea>
                    </fieldset>
            
                    <button type="submit" id="submit-button" disabled>Submit</button>
            </div>
                    <input type="hidden" id="testcafe-rank" name="testcafe-rank" value="1">
                </div>
            </form>

        </body>
    </html>
    
    --- css ---
    
    
    body {
    font-family: 'Roboto', Arial, sans-serif;
}

header {
    width: 100%;
    margin: 2%;
    padding: 3%;
}
form {
    margin: 2%;
    padding: 3%;
    background-color: #393939;
    color: #fff;
}
form fieldset {
    border:  none;
}
form legend {
    font-weight: 600;
    background-color: #ff6767;
    padding: 1%;
    margin-bottom: 1%;
    margin-top: 1%;
    color: #393939;
}

button {
    background-color: #d6995b;
    width: 30%;
    border: none;
    color: #000;
    padding: 2%;
    margin-left: 30%;
    margin-right: 30%;
}

--- js ---

import { Selector } from 'testcafe';

//fixture declaration
fixture 'fx';



/*
fixture `New Fixture`
    .page `about:blank`;
    
test(`New Test`, async t => {
    
});
*/

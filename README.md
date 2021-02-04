# Fun Responses Browser

### Install:

Add this to your code
```html
<script src="https://void206551.dev/projects/fun/fun_responses-latest.js" type="module"></script>
```
Or download the [latest release](https://github.com/void206551/fun-responses-browser/releases) and import it.

### About:
This script will get topics, jokes, etc. and replace the content of the HTML element with what you set as the ID. See example below.

**Important:** After the script is executed, the ID will have a prefix attached to it, `p-`. Please keep this in mind during CSS and advanced scripting.

### Example Use:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Testing</title>
</head>
<body>

    <p id="joke">Joke</p>
    <!--<p id="p-joke">The thief who stole my iPhone could face time.</p>-->
    <p id="topic">Topic</p>
    <!--<p id="p-topic">What do you do to get rid of stress?</p>-->
    <p id="pickup">Pickup Line</p>
    <!--<p id="p-pickup">See my friend over there? They want to know if you think I'm cute.</p>-->
    <p id="toast">Toast</p>
    <!--<p id="p-toast">You're better than a triple-scoop ice cream cone. With sprinkles.</p>-->
    <p id="roast">Roast</p>
    <!--<p id="p-roast">Maybe you should eat make-up so you'll be pretty on the inside too.</p>-->
    
    <script src="fun_responses-latest.js" type="module"></script>
</body>
</html>
```
### [Live Demo](https://void206551.dev/projects/fun/demo/)
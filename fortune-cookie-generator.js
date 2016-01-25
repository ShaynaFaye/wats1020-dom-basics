//////////////////////////////////////////////////////////////////
//
// Fortune Cookie Generator
//
//////////////////////////////////////////

var generateFortuneCookie = function() {
      
    // This is where your code for the Fortune Cookie generator goes.
    // You will use the fortunesList variable defined lower in this file
    // to supply your fortune cookies with text.

// TODO: Grab the paragraph with the ID
    // `fortune-cookie-text` to be able to insert text into that element.

    var currentFortune = document.getElementById("fortune-cookie-text");

   // Stretch Goal: Count the number of generated fortunes and display on the webpage 
    numOfClicks++;
    document.getElementById('numclicks').innerHTML = numOfClicks.toString();

    // TODO: Update the Previous Fortunes list with the current `innerHTML`
        // value of `#fortune-cookie-text`. Follow these steps:
            // 1. Create a new `li` element with the `document.createElement()` method.
            // 2. Set the `innerHTML` of that element equal to the `innerHTML` of
            //    the `#fortune-cookie-text` element.
            // 3. Select the `#previous-fortunes-container` container and use
            //    `appendChild()` to append the new `li` element you created above.
            // 4. You should see the previous fortune cookie saying show up in the list.
            
    // 1.
    var newLi = document.createElement("li");

    // 2.
    newLi.innerHTML = currentFortune.innerHTML;  

    // 3. The text "Click the button to generate a saying" that is originally in the fortune space will not move down into the previous fortunes container
    var previousFortunes = document.getElementById("previous-fortunes-container");
    if ( currentFortune.innerHTML != "Click the button to generate a saying." ) {
        previousFortunes.appendChild(newLi);  
    }

   
        // TODO: Select a new (random) fortune cookie saying from the data stored in the
        // `fortunesList` variable. (HINT: You will use `Math.floor()` and
        // `Math.random()` to accomplish this.) Use this data to update the
        // `innerText` of the `#fortune-cookie-text` element.

    // Generate a random index from the fortunesList.
    var ind = Math.floor(Math.random() * fortunesList.length); 
    
    // Stretch Goal: As random indexes are generated, they will move into the prevFortuneInds array and when the prevFortunesInds equals the fortunesList, then the prevFortuneInds will empty so the fortunes list can be gone through again.
    // As long as the new random index generated is not already in the prevFortunesInds, then it can be used and will generate a new random fortune in the currentFortune space.
    // This ensures that a fortune isn't generated more than once until the entire list has been gone through.
    if (prevFortuneInds.length == fortunesList.length) {
        prevFortuneInds = [];
    }     
    while (prevFortuneInds.indexOf(ind) > -1) {
        ind = Math.floor(Math.random() * fortunesList.length);
    }
    prevFortuneInds = prevFortuneInds.concat(ind);
    var newFortune = fortunesList[ind];
    currentFortune.innerHTML = newFortune;

}

var numOfClicks = 0;
var prevFortuneInds = [];

// The following data list is provided for you to use in your code.
var fortunesList = [
    "People are naturally attracted to you.",
    "You learn from your mistakes... You will learn a lot today.",
    "If you have something good in your life, don't let it go!",
    "Whatever your goal is in life, embrace it, visualize it, and it will be yours.",
    "Your shoes will make you happy today.",
    "You cannot love life until you live the life you love.",
    "Be on the lookout for coming events; They cast their shadows beforehand.",
    "Land is always on the mind of a flying bird.",
    "The man or woman you desire feels the same about you.",
    "Meeting adversity well is the source of your strength.",
    "A dream you have will come true.",
    "Our deeds determine us, as much as we determine our deeds.",
    "Never give up. You're not a failure if you don't give up.",
    "You will become great if you believe in yourself.",
    "There is no greater pleasure than seeing your loved ones prosper.",
    "You will marry your lover.",
    "The greatest love is self-love.",
    "A very attractive person has a message for you.",
    "You already know the answer to the questions lingering inside your head.",
    "It is now, and in this world, that we must live.",
    "You must try, or hate yourself for not trying.",
    "You can make your own happiness.",
    "The greatest risk is not taking one.",
    "The love of your life is stepping into your planet this summer.",
    "Love can last a lifetime, if you want it to.",
    "Adversity is the parent of virtue.",
    "Serious trouble will bypass you.",
    "A short stranger will soon enter your life with blessings to share.",
    "Now is the time to try something new.",
    "Wealth awaits you very soon.",
    "If you feel you are right, stand firmly by your convictions.",
    "If winter comes, can spring be far behind?",
    "Keep your eye out for someone special.",
    "You are very talented in many ways.",
    "A stranger, is a friend you have not spoken to yet.",
    "A new voyage will fill your life with untold memories.",
    "You will travel to many exotic places in your lifetime.",
    "Your ability for accomplishment will follow with success.",
    "Nothing astonishes men so much as common sense and plain dealing.",
    "Its amazing how much good you can do if you don't care who gets the credit.",
    "Everyone agrees. You are the best.",
    "LIFE CONSISTS NOT IN HOLDING GOOD CARDS, BUT IN PLAYING THOSE YOU HOLD WELL.",
    "Jealousy doesn't open doors, it closes them!",
    "It's better to be alone sometimes.",
    "When fear hurts you, conquer it and defeat it!",
    "Let the deeds speak.",
    "You will be called in to fulfill a position of high honor and responsibility.",
    "The man on the top of the mountain did not fall there.",
    "You will conquer obstacles to achieve success.",
    "Joys are often the shadows, cast by sorrows.",
    "Fortune favors the brave.",
    "You are awesome."
]

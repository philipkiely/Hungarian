//globals (words)
week1 = [["Szervusz","Hello"],
["Magyar","Hungarian"],
["Vagyok","I am"],
["Vagy","You are"],
["Nagyon örülök","Nice to meet you"]]


//globals (state)
CURRENT_LANGUAGE = "English";
FRONT = true;
CURRENT_SET = week1
POS = 0


//main functions
function switch_lang(lang) {
    if (lang == "English") { //switch to english
        if (CURRENT_LANGUAGE == "English") { //do nothing if already english
            return
        } else {
            CURRENT_LANGUAGE = "English" //switch
            document.getElementById("english").classList = "btn btn-secondary disabled";
            document.getElementById("magyar").classList = "btn btn-primary";
        }
    } else if (lang == "Magyar") {
        if (CURRENT_LANGUAGE == "Magyar") {
            return
        } else {
            CURRENT_LANGUAGE = "Magyar"
            document.getElementById("english").classList = "btn btn-primary";
            document.getElementById("magyar").classList = "btn btn-secondary disabled";
        }
    } else {
        console.log("Error: Language not recognized")
    }
    load_word();
}


function load_word() {
    if (CURRENT_LANGUAGE == "English") {
        document.getElementById("wordarea").innerHTML = CURRENT_SET[POS][1]
    } else if (CURRENT_LANGUAGE == "Magyar") {
        document.getElementById("wordarea").innerHTML = CURRENT_SET[POS][0]
    } else {
        console.log("Error: Current Language not recognized")
    }
}

function translate() {
    if (CURRENT_LANGUAGE == "English") {
        document.getElementById("wordarea").innerHTML = CURRENT_SET[POS][0]
    } else if (CURRENT_LANGUAGE == "Magyar") {
        document.getElementById("wordarea").innerHTML = CURRENT_SET[POS][1]
    } else {
        console.log("Error: Current Language not recognized")
    }
    POS += 1;
}

function next_card() {
    if (POS < CURRENT_SET.length) {
        if (CURRENT_LANGUAGE == "English") {
            document.getElementById("wordarea").innerHTML = CURRENT_SET[POS][1]
        } else if (CURRENT_LANGUAGE == "Magyar") {
            document.getElementById("wordarea").innerHTML = CURRENT_SET[POS][0]
        } else {
            console.log("Error: Current Language not recognized")
        }
    } else {
        POS = 0;
        shuffle();
        load_word();
    }
}


function next() {
    if (FRONT) {
        FRONT = false;
        translate();
    } else {
        FRONT = true;
        next_card();
    }
}

//with reference to https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle() {
  var currentIndex = CURRENT_SET.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = CURRENT_SET[currentIndex];
    CURRENT_SET[currentIndex] = CURRENT_SET[randomIndex];
    CURRENT_SET[randomIndex] = temporaryValue;
  }
}

function load_set(set) {
    CURRENT_SET = eval(set)
    shuffle()
}


//misc functions
function setYear() {
    document.getElementById("year").innerHTML = (new Date()).getFullYear();
}

//onload
window.onload = setYear();
window.onload = shuffle();
window.onload = load_word();

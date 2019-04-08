function helloWorld() {
    alert("Hello, World!111")
}

var timer = null;

function textBigger() {
    if (timer == null) {
        timer = setInterval(increase2px, 500);
    } else {
        clearInterval(timer);
        timer = null;

    }
}

function increase2px() {
    var fontSize = parseInt($("#textArea").css('font-size'));
    fontSize += 2;
    $("#textArea").css({'font-size': fontSize});
}

function textColor() {
    if ($('#checkButton').is(":checked")) {
        $("#textArea").css({"color": "green", "textDecoration": "underline"});
        $('body').css('background-image', 'url("http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg")');
    } else {
        $("#textArea").removeAttr('style');
        $('body').removeAttr('style');
    }

}

function checkVowel() {
    var array = $("#textArea").val().split(/\s+/);
    sentence = array.map(word => {
        let returnWord = word;
        if (word) {
            [first, ...rest] = word.split('');
            if (isVowel(first)) {
                returnWord = rest.join("") + first + 'ay';
            }
        }
        return returnWord;
    }).join(" ");

    $("#textArea").val(sentence);
}

function isVowel(character) {
    let vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(character.toString().toLowerCase());
}

function replace5Words() {
    let sentence = $("#textArea").val();
    sentence = sentence.replace(/\w{5,}/g, "Malkovich");
    $("#textArea").val(sentence);
}


// window.onload = helloWorld;

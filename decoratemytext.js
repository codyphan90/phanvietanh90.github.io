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
    // var array = $("#textArea").val().split(/\s+/);
    // console.log(array);

    /*sentence = Array.from(sentence.split(' ')).map(word => {

    let returnWord = word;

    //if component part is letter characters then,
    //move first character to end of word and and append 'ay'
    if(/[a-zA-Z]+/.test(word)){
      [first, ...rest] = word.split('');
      returnWord = rest.join('') + first + 'ay'
    }

    return returnWord;

  }).join(' ');*/

}

function isVowel(character) {
    var vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(character.toString().toLowerCase());
}


// window.onload = helloWorld;

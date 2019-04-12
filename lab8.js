$(function() {
    // exercise 1:
    String.prototype.filter = function (char) {
        arr = this.split(" ");
        newarr = arr.filter(char2 => char2 !== char);
        console.log(newarr.join(" "));

    };

    "This house is not nice!".filter('not');

    // exercise 2:
    Array.prototype.bubbleSort = function () {
        console.log(this.sort((a,b) => a-b));
    };

    [6,4,0, 3,-2,1].bubbleSort();

    // Exercise 3:
    function Person(name) {
        this.name = name;
    };

    Person.prototype.teach = function (subject) {
        console.log(this.name + " is now teaching " + subject);
    }

    var teacher = new Person("Harry");
    teacher.teach("WAP");

});

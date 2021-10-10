
var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
var greeting;

    H = h;
    M = m;
    S = s;

    if (H < 5) {
        greeting = 'Have a Good Night ! :)';
    }
    else if (H < 9) {
        greeting = 'Good Morning ! Have a nice Day !';
    }
    else if (H < 12) {
        greeting = 'Good Morning! Have a nice day !';
    }
    else if (H < 16) {
        greeting = 'Good Afternoon ! ';
    }
    else if (H < 19) {
        greeting = 'Good Afternoon !, Take a Rest :)';
    }
    else if (H < 22) {
        greeting = 'Good Night. Have a nice dream !';
    }
    else if (H <= 24) {
        greeting = 'Good Night, Have a nice dream !';
    }

document.write('<h1>' + greeting + '</h1>');
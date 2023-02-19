///// Reversed String

function reverse(string){
    return string.split('').reduce((snowBall, currentChar)=> currentChar + snowBall, '');
}
///// Power

function power(base, exp){
    if(exp === 0) return 1;
    return base * power(base,exp -1);
}
power(2,9);

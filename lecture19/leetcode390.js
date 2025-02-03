/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {

    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    let turn = true;
    while (arr.length >1) {
        let temp =[];
        if(turn){
            for (let i = 1; i < arr.length ; i = i + 2) {
                temp.push(arr[i]);
            }
        }
        else {
            for(let i = arr.length-2; i >= 0; i= i-2){
                temp.unshift(arr[i])
            }
        }

        arr = temp;
        turn = !turn;

    }
    return arr[0];
};  
/*
n = 6

     *
    **
   ***
  ****
 *****
******
*/

const n = 6;

for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = 1; j <= n; j++) {
        str += (j > n - i) ? '*' : ' '
    };
    console.log(str);
}

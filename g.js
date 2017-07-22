/*
b1
n = 6;

*
**
***
****
*****
******
---------
b2
n = 6

     *
    **
   ***
  ****
 *****
******

----------
b3: n = 4
// Math.abs();
   *
  *** 
 ***** 
******* 

*/

const n = 6;

for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = 1; j <= n * 2 - 1; j++) {
        str += (Math.abs(j - n) < i - 1) ? '*' : ' ';
    };
    console.log(str);
}

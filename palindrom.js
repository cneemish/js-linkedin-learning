function palindrom (num){
    let str = num.toString();
    let left = 0;
    let right = str.length -1;

    while (left<right){
        if (str[left] !== str[right]){
            return false
        }
        left++;
        right--;
    }
    return true;

}

console.log(palindrom(131));

let word = "121";
console.log(word.length);

numb = 121;

console.log(numb.length)

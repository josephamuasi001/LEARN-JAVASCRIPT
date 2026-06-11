const a = [4, 5, 89,31, 56, 17];
const k = 31; 
for (i=0; i< a.length; i++){
    if(a[i] == k) {
        console.log(i);
        break
    } else if (a[i] < k) {
        i++
    } else {
        return "NOT FOUND";
    }
}




// 1. Masalani tushunish

// Bizga integer array (arr) berilgan va filtering function (fn) berilgan. Vazifa – bu funksiyadan foydalanib yangi array yaratish, lekin faqatgina fn tomonidan true deb baholangan elementlar qoladi.

// Muhim:

// fn har bir element uchun elementning o‘zi va indeksini olishi mumkin:

// fn(arr[i], i)


// Agar fn natijasi truthy bo‘lsa, elementni yangi array-ga qo‘shamiz. Agar falsy bo‘lsa, qo‘shmaymiz.

// Truthy misollar: 1, "text", {}, [], true

// Falsy misollar: 0, "", null, undefined, false, NaN

// Premium masala bo‘lgani uchun sizdan built-in Array.filter ishlatmasdan yechish talab etilgan.

var filter = function(arr, fn) {

    //arr1
    //fn =function(n) { return n > 10; }
    //1.function(0) { return n > 10; },0
    //2. 0 filteredArr ga push qilinadi
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        //4 marta aylanadi

        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
};

// Test 1: greaterThan10
const arr1 = [0, 10, 20, 30];
const result1 = filter(arr1, function(n) { return n > 10; });
console.log(result1); // [20, 30]

// Test 2: firstIndex
const arr2 = [1, 2, 3];
const result2 = filter(arr2, function(n, i) { return i === 0; });
console.log(result2); // [1]

// Test 3: plusOne
const arr3 = [-2, -1, 0, 1, 2];
const result3 = filter(arr3, function(n) { return n + 1; });
console.log(result3); // [-2, 0, 1, 2]

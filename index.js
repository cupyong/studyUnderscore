var _ = require('underscore')
// _.each([2, 2, 3], function (item) {
//     console.log(item)
// });
_.map([1, 2, 3], function(num){
    console.log(num*3)
    return num * 3;
});
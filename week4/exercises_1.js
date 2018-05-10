
    function prima(bil) {


        for(var i= 2; i < bil; i++) {

            if (bil % i == 0) {

                return false;
            }
        }
        return true;

    }
    console.log(prima(3)); // true
    console.log(prima(7)); // true
    console.log(prima(6)); // false
    console.log(prima(23)); // true
    console.log(prima(33)); // false

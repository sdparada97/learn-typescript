"use strict";
(function () {
    var abc = function (msg) {
        if (false) {
            throw new Error(msg);
        }
        return 1;
    };
    abc('AUXILIO !!');
})();

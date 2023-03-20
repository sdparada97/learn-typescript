"use strict";
(() => {
    const abc = (msg) => {
        if (false) {
            throw new Error(msg);
        }
        return 1;
    };
    abc('AUXILIO !!');
})();

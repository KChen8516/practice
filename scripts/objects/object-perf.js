var Iterator = (function(){
    var idx, obj;

    function IT() {
        idx = 0;
    }

    IT.prototype.resetIterator = function() {
        idx = 0;
    }
    IT.prototype.current = function() {
        return idx;
    }
    IT.prototype.next = function() {
        return ++idx;
    }

    obj = new IT();
    obj.constructor = Iterator;

    return obj;
})();

console.log(Iterator.next());


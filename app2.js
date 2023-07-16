// export { }  //modulae approach
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.test = function () {
        console.warn("Test function working");
    };
    return App;
}());
var a1 = new App();
a1.test();
console.log("hello");

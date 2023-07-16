var App = /** @class */ (function () {
    function App(name) {
        this.name = "Shweta Dhumal";
        this.name = name;
    }
    App.prototype.getName = function () {
        return this.name;
    };
    return App;
}());
var a1 = new App("Rani");
console.warn(a1.getName());

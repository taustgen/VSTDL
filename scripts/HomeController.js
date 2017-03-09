angular
    .module("app")
    .controller("HomeController", HomeController);

function HomeController() {
    var vm = this;
    vm.order="3"
    vm.hide= true;
    vm.toDoList = [];
    vm.priorities = [
        ["Urgent", 1, "alert alert-danger"],
        ["High", 2, "alert alert-warning"],
        ["Low", 3, "alert alert-success"]
    ];
    vm.count= 0
    vm.add = function append() {
        if (vm.task) {
            vm.toDoList.push([vm.task, vm.priority[1], vm.priority[2],vm.count]);
            vm.task = "";
            vm.priority = "";
            vm.hide=false;
            vm.count++;
        }
    }
    vm.high = function high() {
        vm.order = "1";
    }
    vm.low = function low() {
        vm.order = "-1";
    }
    vm.az = function az() {
        vm.order = "0";
    }
    vm.oldest= function Oldest(){
        vm.order="3";
    }
    vm.newest= function Newest(){
      vm.order="-3"
    }
}

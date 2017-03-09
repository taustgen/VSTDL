angular
  .module("app")
  .controller("HomeController", HomeController);
function HomeController(){
  var vm= this;
  vm.order='';
  vm.toDoList=[];
  vm.priorities=[["Urgent", 1, "alert alert-danger"],["High", 2, "alert alert-warning"], ["Low", 3, "alert alert-success"]];
  vm.add= function append(){
    vm.toDoList.push([vm.task, vm.priority[1], vm.priority[2]]);
    vm.task="";
    vm.priority="";
  }
  vm.high= function high(){
    vm.order="1";
  }
  vm.low= function low(){
    vm.order="-1";
  }
  vm.az= function az(){
    vm.order="0";
  }
}

(function() {
    'use strict';

    angular
        .module('todo')
        .controller('TodoController', TodoController);

    TodoController.$inject = ['todoFactory'];

    /* @ngInject */
    function TodoController(todoFactory) {
        var vm = this;
        vm.order = "3"
        vm.hide = true;
        vm.toDoList = [];
        vm.priorities = [
            ["Urgent", 1, "alert alert-danger"],
            ["High", 2, "alert alert-warning"],
            ["Low", 3, "alert alert-success"]
        ];
        activate();
        vm.remove = function(todo) {
            todoFactory
                .remove(todo.todoItemId)
                .then(function(response){
                  activate();
                }
                );
        }
        vm.add = function append() {
            if (vm.task) {
                todoFactory.create({
                        "task": vm.task,
                        "priNum": vm.priority[1],
                        "priStyle": vm.priority[2]
                    })
                    .then(function(data) {
                        vm.toDoList.push(data);
                        vm.hide = false;
                    });


                vm.task = "";
                vm.priority = "";

            }
        }
        vm.high = function high() {
            vm.order = "priNum";
        }
        vm.low = function low() {
            vm.order = "-priNum";
        }
        vm.az = function az() {
            vm.order = "task";
        }
        vm.oldest = function Oldest() {
            vm.order = "todoItemId";
        }
        vm.newest = function Newest() {
            vm.order = "-todoItemId"
        }

        function activate() {
            todoFactory
                .getAll()
                .then(function(data) {
                    vm.toDoList = data;

                })

        }
    }
})();

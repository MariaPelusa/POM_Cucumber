import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TodoPage from "../pageObjects/TodoPage";

const TodoPages = new TodoPage();
const filterTasks = {
    activa1: "TareaActiva1",
    activa2: "TareaActiva2",
    completada: "TareaCompletada",
};


Given("estando en la página de inicio", () => {
    TodoPages.visitHomePage()
});

Given("una tarea, llamada {string}", (taskName) => {
    TodoPages.addTodo(taskName)
});

Given("una tarea, llamada {string}, marcada como completada", (taskName) => {
    TodoPages.addTodo(taskName)
    TodoPages.checkTodo(taskName)
});

Given("tareas activas llamadas {string} y {string}, y una completada {string}", (TareaActiva1, TareaActiva2, TareaCompletada) => {
    TodoPages.addTodo(TareaActiva1);
    TodoPages.addTodo(TareaActiva2);
    TodoPages.addTodo(TareaCompletada);
    TodoPages.checkTodo(TareaCompletada);
});


//-----------------------------------------------------------

When("se crea una tarea, llamada {string}", (taskName) => {
    TodoPages.addTodo(taskName)
});


When("se marca {string} como completada", (taskName) => {
    TodoPages.checkTodo(taskName)
});

When("se desmarca la {string}", (taskName) => {
    TodoPages.elements.todocheckItem(taskName).uncheck();
});

When('se cambia el nombre de {string} por {string}', (taskName, newTaskName) => {
    TodoPages.editarTodo(taskName, newTaskName)
});


When("se pulsa el botón de eliminar {string}", (taskName) => {
    TodoPages.deleteTodo(taskName)
});

When('se pulsa el botón de filtro All', () => {
    TodoPages.filtroAll()
});

When('se pulsa el botón de filtro Active', () => {
    TodoPages.filtroActive()
});

When('se pulsa el botón de filtro Completed', () => {
    TodoPages.filtroCompleted()
});


//-----------------------------------------------------------


Then("aparece una tarea en la lista, llamada {string}", (taskName) => {
    TodoPages.validateTodoExists(taskName)
});


Then('la tarea {string} aparece como completada', (taskName) => {
    TodoPages.elements.todocheckItem(taskName).should('be.checked');
});


Then("la tarea {string} aparece desmarcada", (taskName) => {
    TodoPages.elements.todocheckItem(taskName).uncheck();
});

Then('aparece {string} en la lista de tareas', (newTaskName) => {
    TodoPages.validateTodoExists(newTaskName)
});

Then("desaparece {string} de la lista de tareas", (taskName) => {
    TodoPages.validateTodoNotExists(taskName)
});

Then('solo aparecen {string} y {string} en la lista', (TareaActiva1, TareaActiva2) => {
    TodoPages.validateTodoExists(filterTasks.activa1);
    TodoPages.validateTodoExists(filterTasks.activa2);
    TodoPages.validateTodoNotExists(filterTasks.completada);
});

Then('solo aparece {string} en la lista', (TareaCompletada) => {
    TodoPages.validateTodoExists(filterTasks.completada);
    TodoPages.validateTodoNotExists(filterTasks.activa1);
    TodoPages.validateTodoNotExists(filterTasks.activa2);
});

Then('aparecen {string}, {string} y {string} en la lista', (TareaActiva1, TareaActiva2, TareaCompletada) => {
    TodoPages.validateTodoExists(filterTasks.activa1);
    TodoPages.validateTodoExists(filterTasks.activa2);
    TodoPages.validateTodoExists(filterTasks.completada);
});

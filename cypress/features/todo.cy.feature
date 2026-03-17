Feature:  Tests uniendo POM + Cucumber

  Background:
    Given estando en la página de inicio

  Scenario: Crear una tarea
    When se crea una tarea, llamada 'Tarea 1'
    Then aparece una tarea en la lista, llamada 'Tarea 1'

  Scenario: Marcar tarea como completada
    Given una tarea, llamada 'Tarea 1'
    When se marca 'Tarea 1' como completada
    Then la tarea 'Tarea 1' aparece como completada

  Scenario: Desmarcar una tarea completada
    Given una tarea, llamada 'Tarea 1', marcada como completada
    When se desmarca la 'Tarea 1'    
    Then la tarea 'Tarea 1' aparece desmarcada

  Scenario: Editar el nombre de una tarea
    Given una tarea, llamada 'Tarea 1'
    When se cambia el nombre de 'Tarea 1' por 'Tarea editada'
    Then aparece 'Tarea editada' en la lista de tareas

  Scenario: Borrar una tarea
    Given una tarea, llamada 'Tarea 1'
    When se pulsa el botón de eliminar 'Tarea 1'
    Then desaparece 'Tarea 1' de la lista de tareas

  Scenario: Uso de los filtros
    Given tareas activas llamadas 'TareaActiva1' y 'TareaActiva2', y una completada 'TareaCompletada'
    When se pulsa el botón de filtro Active
    Then solo aparecen 'TareaActiva1' y 'TareaActiva2' en la lista
    When se pulsa el botón de filtro Completed
    Then solo aparece 'TareaCompletada' en la lista
    When se pulsa el botón de filtro All
    Then aparecen 'TareaActiva1', 'TareaActiva2' y 'TareaCompletada' en la lista

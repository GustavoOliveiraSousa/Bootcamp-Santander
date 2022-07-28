//OOJS (ORIENTAÇÃO A OBJETOS JAVASCRIPT)
//PROTÓTIPO
//Todos os objetos Javascript herdam proptiedades e métodos de um ptotopype.

//CLASSES
//Javascript não possui classe nativamente. Todas as classes são objetos e a herança se dá po protótipos
//Syntatic sugar: uma sintaxe feita para facilitar a escrita
class Meal {
    constructor(food) {
        this.food = food
    }
    eat() {
        return "(●'◡'●)";
    }
}
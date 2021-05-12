class Todo {
    id: string;
    text: string;
    isComplete: boolean;

    constructor(text: string) {
        this.text = text;
        this.id = new Date().toISOString();
        this.isComplete = false;
    }
}

export default Todo;
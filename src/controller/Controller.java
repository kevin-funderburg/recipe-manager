public class Controller {

    private Model model;
    private View view;

    public Controller()
    {
        model = new Model(this);
        view = new View(this, model);
    }

    public static void main(String[] args) {
        Controller control = new Controller();
    }
}
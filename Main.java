import java.util.*;

class Task {
    int priority;
    String name;

    Task(int priority, String name) {
        this.priority = priority;
        this.name = name;
    }

    @Override
    public String toString() {
        return "{" + priority + ", " + name + "}";
    }
}

public class Main {
    public static void main(String[] args) {
        List<Task> tasks = new ArrayList<>();
        tasks.add(new Task(3, "Beta"));
        tasks.add(new Task(5, "Alpha"));
        tasks.add(new Task(5, "Charlie"));
        tasks.add(new Task(3, "Alpha"));

        // Sorting: priority descending, name ascending
        tasks.sort((a, b) -> {
            if (a.priority != b.priority) {
                return b.priority - a.priority; // Descending priority
            }
            return a.name.compareTo(b.name); // Ascending name
        });

        System.out.println(tasks);
    }
}

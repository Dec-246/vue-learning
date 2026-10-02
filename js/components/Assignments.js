import AssignmentList from "./AssignmentList.js"; //parent of AssignmentList (creates two instances: "In Progress" and "Completed")
import AssignmentCreate from "./AssignmentCreate.js"; //parent of AssignmentCreate (creates a form to add new assignments)

export default {
    components: { AssignmentList, AssignmentCreate },

    // Ep 8: Handle a form submission
    template: `
        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

            <assignment-create @add="add"></assignment-create>
        </section>
    `,

    data() {
        return {
            assignments: [],
        }
    },

    computed: {
        filters() {
            return {
                // filter is being used to separate two lists (not complete/ complete) based on a bool value.
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            };
        }
    },

    created() {
        // fetch returns a promise, 
        // which is an object that represents a value that may not be available yet.
        fetch('http://localhost:3001/assignments')
        .then(response => response.json())
        .then(assignments => {
            this.assignments = assignments;
        });
    },

    methods: {

        // Ep 8: Handle a form submission
        add(name) {
            this.assignments.push({
                name: name,
                complete: false,
                id: this.assignments.length + 1 // adding new assignment to end of array, using length of array to generate new id
            });
        }
    }
}
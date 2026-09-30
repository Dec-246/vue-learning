import AssignmentList from "./AssignmentList.js"; //parent of AssignmentList (creates two instances: "In Progress" and "Completed")

export default {
    components: { AssignmentList },

    template: `
        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

            // Ep 8: Handle a form submission
            <form @submit.prevent="add">
                <div class="border border-gray-600 text-black">
                    <input v-model="newAssignment" placeholder="New Assignment ..." class="p-2" />
                    <button type="submit" class="bg-white p-2 border-l">Add</button>
                </div>
            </form>
        </section>
    `,

    data() {
        return {
            // Ep 8: Handle a form submission
            newAssignment: '',

            assignments: [
                { name: 'Finish project', complete: false, id: 1 },
                { name: 'Read Chapter 4', complete: false, id: 2 },
                { name: 'Turn in Homework', complete: false, id: 3 },
            ]
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

    methods: {

        // Ep 8: Handle a form submission
        add() {
            this.assignments.push({
                name: this.newAssignment,
                complete: false,
                id: this.assignments.length + 1
            });

            this.newAssignment = '';
        }
    }
}
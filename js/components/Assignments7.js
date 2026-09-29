import AssignmentList from "./AssignmentList.js"; //parent of AssignmentList (creates two instances: "In Progress" and "Completed")

export default {
    components: { AssignmentList },

    template: `
        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
        </section>
    `,

    data() {
        return {
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
    }
}
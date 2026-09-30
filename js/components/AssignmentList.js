import Assignment from "./Assignment.js"; //parent of Assignment (one instance per item, via the for loop)

export default {
    components: { Assignment },

    template: `
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">{{ title }}</h2>

            <ul class="border border-gray-600 divide-y divide-gray-600">
               <assignment 

                // loops through the assignments array, and for each item passes it to Assignment.js via its 'assignment' prop
                    v-for="assignment in assignments"
                    :key="assignment.id" 
                    :assignment="assignment"
                ></assignment>
            </ul>
        </section> 
    `,

    props: {
        assignments: Array,
        title: String
    }
}
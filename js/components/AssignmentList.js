import Assignment from "./Assignment.js"; //parent of Assignment (one instance per item, via the for loop)
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: { Assignment, AssignmentTags},

    template: `
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">{{ title }}
            <span>({{ assignments.length }})</span>
            </h2>

            <!--magic $event variable, contains second argument (tag) from $emit-->
        <!--after user clicks on the tag, it emits a change with the tag selected, in turn, this component waits for that change-->
        <!--we will the store that tag selected as the current tag-->
        <assignment-tags 
            :data-tags="assignments.map(a => a.tag)"
            :current-tag="currentTag"
            @change="currentTag = $event">
        </assignment-tags>

            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
               <assignment 

                // loops through the assignments array, and for each item passes it to Assignment.js via its 'assignment' prop
                    v-for="assignment in filteredAssignments"
                    :key="assignment.id" 
                    :assignment="assignment"
                ></assignment>
            </ul>
        </section> 
    `,

    props: {
        assignments: Array,
        title: String
    },

    data() {
        return {
            currentTag: 'all'
        };
    },

    // - Rule of thumb: if a value is calculated from other data (not just equal to it), 
    // use computed instead of a method or storing it separately as data. 
    // This applies whether that data is hardcoded or entered by the user in UI.
    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all'){
                return this.assignments;
            }

            return this.assignments.filter(a => a.tag === this.currentTag);
        }
    }
}
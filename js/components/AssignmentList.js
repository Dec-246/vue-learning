import Assignment from "./Assignment.js"; //parent of Assignment (one instance per item, via the for loop)

export default {
    components: { Assignment },

    template: `
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">{{ title }}
            <span>({{ assignments.length }})</span>
            </h2>

            <div class="flex gap-2">
                <button
                    @click="currentTag = tag"
                    v-for="tag in tags" 
                    class="border rounded px-1 py-px text-xs"

                    // dynamic class binding to highlight the current tag
                    :class="{
                    'border-blue-500 text-blue-500': currentTag === tag
                    }"
                    >{{ tag }}</button>
            </div>

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

    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all'){
                return this.assignments;
            }

            return this.assignments.filter(a => a.tag === this.currentTag);
        },

        tags() {
            return ['all', ...new Set(this.assignments.map(a => a.tag))];
        }
    }
}
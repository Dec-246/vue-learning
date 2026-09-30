export default {
    template: `
        <form @submit.prevent="add">
            <div class="border border-gray-600 text-black">
                <input v-model="newAssignment" placeholder="New assignment..." class="p-2" /> 
                <button type="submit" class="bg-white p-2 border-l">Add</button>
            </div>
        </form> 
    `,

    data() {
        return {
            // Ep 8: Handle a form submission
            newAssignment: ''
        }
    },

    methods: {
        add() {
            // communicating with parent component
            this.$emit('add', this.newAssignment);

            this.newAssignment = '';
        }
    }
}
import Assignments from "./Assignments.js"; // parent of assignments

export default {
    components: { Assignments },

    template: `
        <assignments></assignments>    
    `,

    mounted() {
        setTimeout(() => {
            document.title = 'Episode 11: Component Responsibility';
        }, 1000)
    },
}
// having a separate component for each individual assignment means we can simplify the codebase, 
// make it easier to navigate, and reuse the component in other parts of the application.

export default {
    template: `
        <li>
            <label class="p-2 flex justify-between items-center">
                {{ assignment.name }}

                <input type="checkbox" v-model="assignment.complete" class="ml-3">
            </label>
        </li> 
    `,

    props: {
        assignment: Object
    }
}
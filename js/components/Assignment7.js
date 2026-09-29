// having a separate component for each individual assignment means we can simplify the codebase, 
// make it easier to navigate, and reuse the component in other parts of the application.

export default {
    template: `
        <li>
            <label>
                {{ assignment.name }}

                <input type="checkbox" v-model="assignment.complete">
            </label>
        </li> 
    `,

    props: {
        assignment: Object
    }
}
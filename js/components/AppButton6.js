export default {
    template: `
        <button 
        // can use an array of classes or an object to conditionally apply classes
            :class="{
                'border rounded px-5 py-2 disabled:cursor-not-allowed': true,
                'bg-blue-600 hover:bg-blue-700': type === 'primary',
                'bg-purple-200 hover:bg-purple-400': type === 'secondary',
                'bg-gray-200 hover:bg-gray-400': type === 'muted',

                // processing is binded to the css class 'is-loading' and also disables the button when true
                'is-loading': processing
            }" 
            :disabled="processing"
        >
            <slot />
        </button>
    `,

    // Props can be used to define expected data types and set fallback default values 
    // here we are setting primary as default for button properties. these also fetch attributes from the class above.
    props: {
        type: {
            type: String,
            default: 'primary'
        },

        // processing is binded to the css class 'is-loading' and also disables the button when true
        processing: {
            type: Boolean,
            default: false
        }
    }
}
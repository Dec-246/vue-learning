# VUE


## Getting Started/ basics

- Using a plain <header> tag with text inside will be useless as view won’t acknowledge it if it is outside of the ‘app’ id
<div id=“app”></div>
- We use {{ greeting }} (as an example) to echo out data associated with the greeting property.
- We set objects inside methods inside a script tag to associate the data to the property being echoed out.
- Can use ‘npx serve’ to create node server to view Vue UI in browser.
- Vue code involves using JavaScript such as ({{ greeting.length }}) to print length of the data property
- In Vue, we can use v-model=“” that creates two-way link between form input element and reactive data property
- setTimeout(() => {}, ); can be used to update the message after a given time1

## Vue Components

- Can use v-show/ v-if to conditionally render/ displays elements 
    - V-if will destroy and recreate the element on demand.
    - V-show will always have the element loaded but just hide/ show it when required. This can be seen clearer using inspect element
    - These attributes can be used within tags such as sections to hide/ show content such as lists/ arrays. These attributes can be used to seemingly add/ remove items from one list to another.
- Can use import attributes to put the app javascript module in another file separate from the UI content.
- Can use the Vue.js chrome extension to specifically see Vue component code.
- Standard practise to have all code in their appropriate files, such as having the AppButton line in an App.js file, and having the main component code in an AppButton.js file.
- Vue uses props (properties) to pass down data from parent to child components.
- Props can be used to define expected data types and set fallback default values 
- Props are useful for:
    - making components reusable; same UI elements with different data.
    - Clear data flow; parent to child, easier to track origin of data changes
    - Data validation; Vue enables defining of expected types, requirements and default fallback values for props for catching bugs early

## Event Handling

- During form submission, the data on screen will refresh automatically. We can turn this off by using @submit.prevent
- We can set responsive alerts that populate with the form data after submission 
- Without setting the variable for the form fields to an empty string, the form data will remain populated. This empty value means that the form field resets to being blank after form submission (newAssignment: ‘’,).
- Parent communicates to child through props. The child communicates to parent through emitting events.
- Using @add="add" means that the parent component listens for fired events when form submitted, calls its own ‘add’ method which then sends the submitted data to the array list (assignments list from tutorial)
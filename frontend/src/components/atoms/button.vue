<template>
    <div>
        <b-button>{{button_name1}}</b-button>
        <b-button variant="danger">{{button_name2}}</b-button>
        <b-button variant="success">{{button_name3}}</b-button>
        <b-button variant="outline-primary">{{button_name4}}</b-button>
        <b-button variant="primary">{{props_button_name}}</b-button>
    </div>
</template>

<script>
export default {
    name: "Button",
    data (){
        return {
            button_name1: "button1",
            button_name2: "button2",
            button_name3: "button3",
            button_name4: "button4"
        }
    },
    props: {
        props_button_name: {
            type: String
        }
    }
}
</script>
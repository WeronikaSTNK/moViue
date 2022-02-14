<template>
    <div>
        <label class="row m-2">Don't hesitate to search for your favorite movie!</label>
        <input
            type="text"
            placeholder="Search movies by title . . ."
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            class="form-control m-2"
        />
    </div>
</template>

<script>
export default {
    props: {
        modelValue: String
    },
    emits: ['update:modelValue']
}
</script>

<style>
</style>

<template>
    <svg class="e-icon">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>
<script>
    import './svg'
    export default {
        name: 'ElemeIcon',
        props: ['name']
    }
</script>
<style lang="stylus" scoped>
    .e-icon
        width: 1em
        height: 1em
</style>
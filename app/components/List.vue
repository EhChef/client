<template>
    <Page>
        <ActionBar :title="my_prop" />
        <ScrollView for="item in [1, 2, 3, 4, 5]" orientation="horizontal">
            <StackLayout orientation="horizontal">
                <Label text="this" />
                <Label text="text" />
                <Label text="scrolls" />
                <Label text="horizontally" />
                <Label text="if necessary" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>


<script>
export default {
    props: ['my_prop'],
    methods: {
    }
}
</script>

<style scoped>
ActionBar {
    height: 50;
    color: #ffffff;
    background-color: #a21b1b;
}
</style>

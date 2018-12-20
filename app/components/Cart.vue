<template>
  <Page>
    <ScrollView orientation="vertical">
      <StackLayout orientation="vertical">
        <!-- <Label class="title-list" :text="my_prop" /> -->
        <Label class="title-list" :text="type_product" @tap="$navigateBack()" />
        <WrapLayout v-for="item in list_commande" class="pl-15 pr-15" backgroundColor="">
          <WrapLayout class="item-list-menu" height="100">
            <StackLayout width="70%">
              <Label class="pl-15 menu-title" :text="item[1]" height="35%"/>
            </StackLayout>
            <Label class="arrow-list-menu pr-15" text="" width="30%" height="100%"/>
          </WrapLayout>
        </WrapLayout>
        <WrapLayout class="pl-15 pr-15" backgroundColor="">
          <WrapLayout class="item-list-menu" height="100">
            <StackLayout width="100%">
              <Label class="pl-15 menu-title" text="Je commande" height="100%"/>
            </StackLayout>
          </WrapLayout>
        </WrapLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>


<script>
import App from './App';
import List from './List';
import Detail from './Detail';
import Cart from './Cart';
export default {
  props: ['list_commande']
}
</script>

<style scoped>
</style>

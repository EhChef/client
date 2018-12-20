<template>
  <Page>
    <ActionBar title="">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <Image class="img-panier" src="~/assets/images/shopping-bag.png" @tap="goCart()"/>
    </ActionBar>
    <ScrollView orientation="vertical">
      <StackLayout orientation="vertical">
        <!-- <Label class="title-list" :text="my_prop" /> -->
        <Label class="title-list" :text="type_product" @tap="$navigateBack()" />
        <WrapLayout v-for="item in list_product" class="pl-15 pr-15" backgroundColor="" @tap="addCart(item._id, item.name)">
          <WrapLayout class="item-list-menu" height="100">
            <StackLayout width="70%">
              <Label class="pl-15 menu-title" :text="item.name" height="35%"/>
              <Label class="pl-15" :text="item.price" height="20%"/>
            </StackLayout>
            <Label class="arrow-list-menu pr-15" text="+" width="30%" height="100%"/>
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
const httpModule = require("http");
export default {
  props: ['list_product', 'type_product'],
  methods: {
    addCart(id, name) {
      var sous_detail_commande = new Array();
      // console.log(id);
      // console.info(name);
      var detail_commande = JSON.parse(localStorage.getItem('commande'));
      sous_detail_commande.push(id);
      sous_detail_commande.push(name);
      // console.log(detail_commande);
      // console.log(typeof detail_commande);
      detail_commande.push(sous_detail_commande);
      localStorage.setItem('commande', JSON.stringify(detail_commande));
      console.log(JSON.parse(localStorage.getItem('commande')));
    },
    goCart() {
      console.log("passe");
      this.$navigateTo(Cart, {props: {
        list_commande: JSON.parse(localStorage.getItem('commande'))
      }
    });
    }
  },
}
</script>

<style scoped>
</style>

<template>
  <Page>
    <ActionBar title="">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
      <Image class="img-panier" src="~/assets/images/shopping-bag.png"/>
    </ActionBar>
    <ScrollView orientation="vertical">
      <StackLayout orientation="vertical">
        <!-- <Label class="title-list" :text="my_prop" /> -->
        <Label class="title-list" :text="name_resto" @tap="$navigateBack()" />

        <!-- <WrapLayout v-for="item in [1, 2, 3, 4, 5]" class="pl-15 pr-15" backgroundColor="" @tap="onButtonTap">
          <WrapLayout class="item-list-menu" height="100">
            <StackLayout width="70%">
              <Label class="pl-15 menu-title" text="Les menus" height="35%"/>
              <Label class="pl-15" text="Entrée + Plat + Dessert" height="20%"/>
            </StackLayout>
            <StackLayout width="30%">
              <Image class="img-list-menu" src="~/assets/images/asian.png"/>
            </StackLayout>
          </WrapLayout>
        </WrapLayout> -->
        <WrapLayout v-if="has_menu" class="pl-15 pr-15" backgroundColor="" @tap="onButtonTap('menus')">
          <WrapLayout class="item-list-menu" height="100">
            <StackLayout width="70%">
              <Label class="pl-15 menu-title" text="Les menus" height="35%"/>
              <Label class="pl-15" text="Entrée + Plat + Dessert" height="20%"/>
            </StackLayout>
            <StackLayout width="30%">
              <Image class="img-list-menu" src="~/assets/images/asian.png"/>
            </StackLayout>
          </WrapLayout>
        </WrapLayout>
        <WrapLayout v-if="has_starters" class="pl-15 pr-15" backgroundColor="" @tap="onButtonTap('starters')">
          <WrapLayout class="item-list-menu" height="100">
            <StackLayout width="70%">
              <Label class="pl-15 menu-title" text="Les entrées" height="35%"/>
              <Label class="pl-15" text="Toutes les entrées à la carte" height="20%"/>
            </StackLayout>
            <Label class="arrow-list-menu pr-15" text=">" width="30%" height="100%"/>
            </WrapLayout>
          </WrapLayout>
        <WrapLayout v-if="has_main_courses" class="pl-15 pr-15" backgroundColor="" @tap="onButtonTap('main')">
          <WrapLayout class="item-list-menu" height="100">
            <StackLayout width="70%">
              <Label class="pl-15 menu-title" text="Les plats" height="35%"/>
              <Label class="pl-15" text="Tous les plats à la carte" height="20%"/>
            </StackLayout>
            <StackLayout width="30%">
              <Image class="img-list-menu" src="~/assets/images/burger.png"/>
            </StackLayout>
          </WrapLayout>
        </WrapLayout>
          <WrapLayout v-if="has_dessert" class="pl-15 pr-15" backgroundColor="" @tap="onButtonTap('desserts')">
            <WrapLayout class="item-list-menu" height="100">
              <StackLayout width="70%">
                <Label class="pl-15 menu-title" text="Les Dessert" height="35%"/>
                <Label class="pl-15" text="Tous les desserts à la carte" height="20%"/>
              </StackLayout>
              <Label class="arrow-list-menu pr-15" text=">" width="30%" height="100%"/>
              </WrapLayout>
            </WrapLayout>
            <WrapLayout v-if="has_extra" class="pl-15 pr-15" backgroundColor="" @tap="onButtonTap('extras')">
              <WrapLayout class="item-list-menu" height="100">
                <StackLayout width="70%">
                  <Label class="pl-15 menu-title" text="Les suppléments" height="35%"/>
                  <Label class="pl-15" text="Tous les suppléments à la carte" height="20%"/>
                </StackLayout>
                <Label class="arrow-list-menu pr-15" text=">" width="30%" height="100%"/>
              </WrapLayout>
            </WrapLayout>
          </StackLayout>
        </ScrollView>
      </Page>
    </template>


      <script>
      import App from './App';
      import Detail from './Detail';
      import Cart from './Cart';
      const httpModule = require("http");
      export default {
        props: ['id_resto', 'name_resto', 'has_starters', 'has_menu', 'has_main_courses', 'has_dessert', 'has_extra'],
        methods: {
          onButtonTap(cat) {
            // console.log(cat);
            // this.$navigateTo(App);
            httpModule.request({
              url: localStorage.getItem('url')+cat,
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`,
                "account": localStorage.getItem('account')
              },
            }).then(response => {
              // Argument (response) is HttpResponse
              const str = response.content.toJSON();
              console.log(str);
              this.$navigateTo(Detail, {props: {
                list_product: str[cat],
                type_product: cat
              }
            });
            }, (e) => {
              console.log(e);
            });
          }
        },
      }
      </script>

      <style scoped>
      </style>

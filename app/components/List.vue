<template>
    <Page>
        <ScrollView for="item in [1, 2, 3, 4, 5]" orientation="vertical">
            <StackLayout orientation="vertical">
              <!-- <Label class="title-list" :text="my_prop" /> -->
              <Label class="title-list" text="Nom du resto" />
              <WrapLayout class="pl-15 pr-15" backgroundColor="" @tap="onButtonTap">
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
              <WrapLayout class="pl-15 pr-15" backgroundColor="">
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
              <WrapLayout class="pl-15 pr-15" backgroundColor="">
                <WrapLayout class="item-list-menu" height="100">
                  <StackLayout width="70%">
                    <Label class="pl-15 menu-title" text="Les entrées" height="35%"/>
                    <Label class="pl-15" text="Toutes les entrées à la carte" height="20%"/>
                  </StackLayout>
                  <Label class="arrow-list-menu pr-15" text=">" width="30%" height="100%"/>
                </WrapLayout>
              </WrapLayout>
              <WrapLayout class="pl-15 pr-15" backgroundColor="">
                <WrapLayout class="item-list-menu" height="100">
                  <StackLayout width="70%">
                    <Label class="pl-15 menu-title" text="Les Dessert" height="35%"/>
                    <Label class="pl-15" text="Tous les desserts à la carte" height="20%"/>
                  </StackLayout>
                  <Label class="arrow-list-menu pr-15" text=">" width="30%" height="100%"/>
                </WrapLayout>
              </WrapLayout>
              <WrapLayout class="pl-15 pr-15" backgroundColor="">
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
export default {
    props: ['my_prop'],
    methods: {
        onButtonTap() {
          this.$navigateTo(App);
        }
    }
}
</script>

<style scoped>
</style>

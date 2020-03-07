import { Vue, Component } from "vue-property-decorator";

@Component
export default class MyHome extends Vue {
  async navigateToMyInfo() {
    await this.loggedIn();

    this.$wx.navigateTo({
      url: "/pages/my/info/index"
    });
  }
}

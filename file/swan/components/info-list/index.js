Component({
  properties: {
    list: Array,
  },
  attached(){
    this.setData({
      isShowMore: this.properties.list.length>4,
      infolist: this.properties.list.slice(0,4)
    })
    console.log('/index.js [8]--1','dd',this.properties,this.data);
  },
  handleToPath() {
    swan.switchTab({
      url:'/pages/info/index'
    })
  }
});

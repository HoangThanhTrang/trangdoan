(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1f24f28"],{"01d5":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"draggable"},[a("div",{class:e.classHeader},[e.firstColumn||e.borderHeader?e._e():a("div",{staticClass:"stripe"}),a("div",{staticClass:"content"},[a("h3",[e._v(e._s(e.dataProp.name?e.dataProp.name:""))]),a("div",{staticClass:"flex"},[a("span",{staticClass:"price"},[e._v(e._s(e._f("formatNumber")(e.dataProp.totalValue)))]),a("span",{staticClass:"dot"}),a("span",{staticClass:"count"},[e._v(e._s(e._f("formatNumber")(e.dataProp.numOfSalesDeal))+" cơ hội")])])])]),a("draggable",{staticClass:"list-group",attrs:{list:e.dataProp.salesDeals,group:"people"},on:{change:e.change},nativeOn:{scroll:function(t){return function(t){return e.handleScroll(t,e.dataProp.id)}.apply(null,arguments)}}},[e._l(e.dataProp.salesDeals,(function(t){return a("div",{key:t.id,staticClass:"list-group-item cursor",on:{click:function(a){return e.handleItemClick(t)}}},[a("div",{staticClass:"be-flex jc-space-between"},[a("h3",[e._v(e._s(t.name?t.name:""))]),a("el-popover",{attrs:{placement:"bottom","popper-class":"popper-action-deal"},on:{hide:e.hideAction},nativeOn:{click:function(t){return e.handleConflictClick.apply(null,arguments)}}},[a("div",{staticClass:"be-flex-column content"},[a("div",{staticClass:"content-item cursor",on:{click:function(a){return e.handleClickOpenAction({status:"edit",id:t.id})}}},[a("span",[e._v("Sửa thông tin")])]),a("div",{staticClass:"content-item cursor",on:{click:function(a){return e.handleClickOpenAction({status:"assign",id:t.id,data:t})}}},[a("span",[e._v("Gán phụ trách")])]),a("div",{staticClass:"content-item cursor",on:{click:function(a){return e.handleOpenPopupNote(t)}}},[a("span",[e._v("Ghi chú")])]),a("div",{staticClass:"content-item cursor",on:{click:function(a){return e.handleClickOpenAction({status:"createCalen",id:t.customerId,data:t})}}},[a("span",[e._v("Tạo lịch hẹn")])]),a("div",{staticClass:"content-item cursor",on:{click:function(a){return e.handleClickOpenAction({status:"uploadFile",id:t.id})}}},[a("span",[e._v("Upload tài liệu")])]),a("div",{staticClass:"content-item cursor",on:{click:function(a){return e.handleClickOpenAction({status:"delete",id:t.id})}}},[a("span",[e._v("Xóa cơ hội")])])]),a("div",{staticClass:"reference",attrs:{slot:"reference"},slot:"reference"},[a("i",{staticClass:"el-icon-more"})])])],1),a("p",{staticClass:"small"},[e._v(e._s(t.salesFullName?t.salesFullName:""))]),a("span",{staticClass:"flex"},[t.id&&t.salesAvatar?a("el-avatar",{attrs:{src:t.salesAvatar,size:"small"}}):a("base-icon",{staticClass:"avatar__imployee--defalt",attrs:{icon:"icon-avatar-default"}}),a("span",{staticClass:"deal-value"},[e._v(e._s(e._f("formatNumber")(t.dealValue)))])],1)])})),e.firstColumn?a("el-button",{staticClass:"btn-add-deal",attrs:{slot:"footer",icon:"el-icon-plus"},on:{click:function(t){return e.handleClickOpenAction({status:"add",id:""})}},slot:"footer"},[e._v("Thêm cơ hội")]):e._e()],2)],1)},i=[],o=a("276c"),r=a("e954"),s=a("920b"),l=a("92a6"),c=a("9ab4"),u=a("2ef0"),d=a("1b40"),p=a("b76a"),h=a.n(p),f=a("c56f"),m=a("9f48"),g=function(e){Object(s["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(o["a"])(this,a),e=t.apply(this,arguments),e.isLog=!1,e.dataPopup={title:"Thêm mới cơ hội bán hàng",code:"",id:"",data:{}},e.isConflictClick=!1,e.debounceLoadMore=Object(u["debounce"])(e.handleLoadMore,500),e}return Object(r["a"])(a,[{key:"classHeader",get:function(){return this.borderHeader&&!this.firstColumn?"flex draggable-header header-border-left":"flex draggable-header"}},{key:"handleScroll",value:function(e,t){e.target.scrollTop+e.target.offsetHeight+1>=e.target.scrollHeight&&this.debounceLoadMore(t)}},{key:"handleLoadMore",value:function(e){this.$emit("loadMore",e)}},{key:"hideAction",value:function(){this.isConflictClick=!1}},{key:"handleConflictClick",value:function(){this.isConflictClick=!0}},{key:"change",value:function(e){console.log(e),e["added"]&&(e["added"].id=this.dataProp.id),e["removed"]&&(e["removed"].id=this.dataProp.id),e["moved"]&&(e["moved"].id=this.dataProp.id),this.$emit("log",e)}},{key:"handleItemClick",value:function(e){this.isConflictClick||this.$emit("clickItem",e)}},{key:"handleClickOpenAction",value:function(e){this.$emit("action",e)}},{key:"handleOpenPopupNote",value:function(e){this.$emit("createNote",e)}}]),a}(Object(d["b"])(f["a"],m["a"]));Object(c["a"])([Object(d["c"])({type:Object})],g.prototype,"dataProp",void 0),Object(c["a"])([Object(d["c"])()],g.prototype,"firstColumn",void 0),Object(c["a"])([Object(d["c"])()],g.prototype,"borderHeader",void 0),g=Object(c["a"])([Object(d["a"])({components:{draggable:h.a}})],g);var v=g,y=v,b=(a("81a9"),a("2877")),k=Object(b["a"])(y,n,i,!1,null,"a686cdf4",null);t["a"]=k.exports},"03a3":function(e,t,a){},"0c1f":function(e,t,a){"use strict";a("03a3")},"41fe":function(e,t,a){},"81a9":function(e,t,a){"use strict";a("41fe")},e51f:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"deal-page draggable-page"},[a("div",{staticClass:"header be-flex jc-space-between"},[a("deal-filter",{staticClass:"be-flex-item",attrs:{filters:e.filters,isPipeline:!1},on:{change:e.handleFiltersChange}}),a("div",{staticClass:"actions"},[a("el-popover",{attrs:{placement:"bottom",trigger:"click","popper-class":"popper-action-deal popper-deal-forcast"}},[a("div",{staticClass:"be-flex-column content"},[a("div",{staticClass:"content-item-sm cursor"},[a("span",{staticClass:"small"},[e._v("Hiển thị theo")])]),e._l(e.listFilterBy,(function(t){return a("div",{key:t.key,class:e.query.filterBy==t.key?"content-item cursor is-active":"content-item cursor",on:{click:function(a){return e.handleClickViewModeDate(t.key)}}},[a("span",[e._v(e._s(t.label))]),a("i",{staticClass:"el-icon-check"})])}))],2),a("hr"),a("div",{staticClass:"be-flex-column content"},[a("div",{staticClass:"content-item-sm cursor"},[a("span",{staticClass:"small"},[e._v("Khoảng thời gian")])]),e._l(e.listFilterType,(function(t){return a("div",{key:t.key,class:e.query.filterType==t.key?"content-item cursor is-active":"content-item cursor",on:{click:function(a){return e.handleClickViewMode(t.key)}}},[a("span",[e._v(e._s(t.label))]),a("i",{staticClass:"el-icon-check"})])}))],2),a("div",{staticClass:"reference",attrs:{slot:"reference"},slot:"reference"},[a("el-button",{class:e.showViewMode?"btn-window-plus is-actives":"btn-window-plus",on:{click:function(t){e.showViewMode=!e.showViewMode}}},[a("base-icon",{staticClass:"icon-window-plus",attrs:{icon:"window-plus"}})],1)],1)]),a("el-button-group",{staticClass:"custom-button"},[a("el-button",{attrs:{size:"medium"}},[a("el-button",{staticClass:"btn-icon",attrs:{disabled:e.disable.dPrev,icon:"el-icon-d-arrow-left"},on:{click:function(t){return e.handleGroupButton("d-left")}}}),a("el-button",{staticClass:"btn-icon",attrs:{disabled:e.disable.prev,icon:"el-icon-arrow-left"},on:{click:function(t){return e.handleGroupButton("left")}}})],1),a("el-button",{attrs:{size:"medium"},on:{click:function(t){return e.handleGroupButton("to-day")}}},[e._v("Hôm nay")]),a("el-button",{attrs:{size:"medium"}},[a("el-button",{staticClass:"btn-icon",attrs:{icon:"el-icon-arrow-right"},on:{click:function(t){return e.handleGroupButton("right")}}}),a("el-button",{staticClass:"btn-icon",attrs:{icon:"el-icon-d-arrow-right"},on:{click:function(t){return e.handleGroupButton("d-right")}}})],1)],1),a("el-select",{staticClass:"custom-button",attrs:{"popper-class":"popper-action-deal",size:"medium",placeholder:"Chọn Pipeline"},on:{change:e.handleChangPipeLine},model:{value:e.query.pipelineId,callback:function(t){e.$set(e.query,"pipelineId",t)},expression:"query.pipelineId"}},[a("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:function(){return e.loadMore("products")},expression:"() => loadMore('products')"}],attrs:{"infinite-scroll-delay":"500"}},[e._l(e.listPipeline,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),a("el-option",{staticClass:"option-sticky",attrs:{label:"",value:e.query.pipelineId},nativeOn:{click:function(t){return e.handleRedirect.apply(null,arguments)}}},[a("i",{staticClass:"el-icon-plus"}),e._v(" Thêm Pipeline")])],2)]),a("el-dropdown",{staticClass:"custom-button",attrs:{size:"medium","split-button":""},on:{click:function(t){return e.handleClickOpenAction({status:"add",id:""})}}},[e._v(" Thêm mới "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[e._v("Thêm mới từ Excel")])],1)],1),a("el-button",{staticClass:"custom-button",attrs:{loading:!1}},[a("span",{staticClass:"be-inline-flex align-center"},[a("base-icon",{staticClass:"icon",attrs:{icon:"excel-fullcolor"}}),e._v(" Xuất Excel ")],1)])],1)],1),a("div",{staticClass:"content",attrs:{id:"content-deal-forecast"},on:{scroll:e.handleScrollHorizontal}},[a("el-row",{staticClass:"be-flex"},e._l(e.dataDrag,(function(t,n,i){return a("el-col",{key:t.id,staticClass:"be-flex-item"},[a("draggable",{attrs:{dataProp:t,firstColumn:0==i,borderHeader:e.borderHeader},on:{createNote:e.handleOpenCreateNote,loadMore:e.loadMoreDrag,clickItem:e.handleClickItem,log:e.handleChangeItem,action:e.handleClickOpenAction}})],1)})),1)],1),a("create-deal",{attrs:{dataProp:e.dataPopup},on:{apply:e.init,openDestroy:e.handleClickOpenAction}}),a("popup-confirm-deal",{attrs:{dataProp:e.dataPopup},on:{confirm:e.handleConfirm}}),a("appoint-customer",{attrs:{idCustomer:this.idCustomer}}),a("popup-note",{attrs:{type:e.type},on:{update:e.handleCreateNote}})],1)},i=[],o=a("c964"),r=a("d0ff"),s=a("276c"),l=a("e954"),c=a("920b"),u=a("92a6"),d=(a("96cf"),a("b0c0"),a("99af"),a("d3b7"),a("ddb0"),a("4ec9"),a("3ca3"),a("d81d"),a("caad"),a("2532"),a("25f0"),a("b64b"),a("9ab4")),p=a("1b40"),h=a("7fd9"),f=a("08ba"),m=a("c56f"),g=a("2ef0"),v=a("be17"),y=a("9f48"),b=a("01d5"),k=a("1572"),C=a("222c"),D=a("d67a"),w=function(e){Object(c["a"])(a,e);var t=Object(u["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.listPipeline=[],e.isLoading=!1,e.filters={},e.listFilterBy=[{key:"createdAt",label:"Ngày tạo",active:!1},{key:"closedAt",label:"Ngày chốt dự kiến",active:!1}],e.listFilterType=[{key:"week",label:"Theo tuần",active:!1},{key:"month",label:"Theo tháng",active:!1},{key:"quarter",label:"Theo quý",active:!1}],e.dataPopup={title:"",code:"",id:"",data:{},dataSelect:[]},e.idCustomer={id:"",data:{}},e.query={pipelineId:1,filterBy:"createdAt",filterType:"week",limit:10},e.queryLoadMorePipeline={page:1,limit:20},e.queryLoadMore={},e.dataDrag={},e.showViewMode=!1,e.disable={dPrev:!1,prev:!1},e.type="add",e.dealId=0,e.firstFromDate=new Date,e.loadMoreHorizontalDebounce=Object(g["debounce"])(e.handleLoadMoreHori,200),e}return Object(l["a"])(a,[{key:"borderHeader",get:function(){return"forecast"==this.$route.name}},{key:"handleChangPipeLine",value:function(e){this.query.pipelineId=e,this.init()}},{key:"handleRedirect",value:function(){this.$router.push({name:"ProgressiveSales",params:{type:"them"}})}},{key:"handleOpenCreateNote",value:function(e){this.dealId=e.id,this.setOpenPopup({popupName:"popup-note",isOpen:!0})}},{key:"handleCreateNote",value:function(e){var t=this,a="DEAL";this.apiDeal.createNote(a,{description:e.content,dealId:this.dealId}).then((function(){t.$message.success("Tạo ghi chú thành công")}))}},{key:"handleScrollHorizontal",value:function(e){e.target.scrollLeft+e.target.offsetWidth>=e.target.scrollWidth&&this.loadMoreHorizontalDebounce()}},{key:"handleLoadMoreHori",value:function(){this.query.limit+=5,this.init()}},{key:"loadMore",value:function(e){var t=this;switch(e){case"pipeline":this.queryLoadMorePipeline.limit+=10,this.apiDeal.getDataSalesPipelines(this.queryLoadMorePipeline).then((function(e){var a=[].concat(Object(r["a"])(t.listPipeline),Object(r["a"])(e.data.content));t.listPipeline=Object(r["a"])(new Map(a.map((function(e){return[e["id"],e]}))).values())}));break}}},{key:"daysInMonth",value:function(e,t){return new Date(t,e,0).getDate()}},{key:"getPreviousMoreMonday",value:function(e){var t=new Date(e),a=new Date;return"week"==this.query.filterType&&(a=new Date(t.getFullYear(),t.getMonth(),t.getDate()-28)),"month"==this.query.filterType&&(a=new Date(t.getFullYear(),t.getMonth()-4,t.getDate())),"quarter"==this.query.filterType&&(a=new Date(t.getFullYear(),t.getMonth()-12,t.getDate())),this.convertFromDate(a)}},{key:"getPreviousMonday",value:function(e){var t=new Date(e),a=new Date;return"week"==this.query.filterType&&(a=new Date(t.getFullYear(),t.getMonth(),t.getDate()-7)),"month"==this.query.filterType&&(a=new Date(t.getFullYear(),t.getMonth()-1,t.getDate())),"quarter"==this.query.filterType&&(a=new Date(t.getFullYear(),t.getMonth()-4,t.getDate())),this.convertFromDate(a)}},{key:"getNextMonday",value:function(e){var t=new Date(e),a=new Date;return"week"==this.query.filterType&&(a=new Date(t.getFullYear(),t.getMonth(),t.getDate()+7)),"month"==this.query.filterType&&(a=new Date(t.getFullYear(),t.getMonth()+1,t.getDate())),"quarter"==this.query.filterType&&(a=new Date(t.getFullYear(),t.getMonth()+4,t.getDate())),this.convertFromDate(a)}},{key:"getNextMoreMonday",value:function(e){var t=new Date(e),a=new Date;return"week"==this.query.filterType&&(a=new Date(t.getFullYear(),t.getMonth(),t.getDate()+28)),"month"==this.query.filterType&&(a=new Date(t.getFullYear(),t.getMonth()+4,t.getDate())),"quarter"==this.query.filterType&&(a=new Date(t.getFullYear(),t.getMonth()+12,t.getDate())),this.convertFromDate(a)}},{key:"getToday",value:function(){var e=new Date;return this.convertFromDate(e)}},{key:"convertFromDate",value:function(e){return"".concat(e.getFullYear(),"-").concat(("0"+(+e.getMonth()+1)).substr(-2),"-").concat(("0"+e.getDate()).substr(-2))}},{key:"handleGroupButton",value:function(e){var t=document.getElementById("content-deal-forecast");t.scrollLeft=0,"d-left"==e?this.query.fromDate=this.getPreviousMoreMonday(this.firstFromDate):"left"==e?this.query.fromDate=this.getPreviousMonday(this.firstFromDate):"right"==e?this.query.fromDate=this.getNextMonday(this.firstFromDate):"d-right"==e?this.query.fromDate=this.getNextMoreMonday(this.firstFromDate):(this.query.fromDate=this.getToday(),this.query.limit=10),console.log(this.query.fromDate),this.init()}},{key:"handleClickViewModeDate",value:function(e){var t=document.getElementById("content-deal-forecast");t.scrollLeft=0,this.query.filterBy=e,this.init()}},{key:"handleClickViewMode",value:function(e){this.query.limit=10;var t=document.getElementById("content-deal-forecast");t.scrollLeft=0,this.query.filterType=e,this.init()}},{key:"log",value:function(e){window.console.log(e)}},{key:"handleClick",value:function(){this.setOpenPopup({popupName:"create-deal",isOpen:!0})}},{key:"handleClickOpenAction",value:function(e){var t=e.status,a=e.id;this.dataPopup.code=t,this.dataPopup.id=a,(t.includes("assign")||"delete"==t)&&(this.dataPopup.title="delete"==t?"Xác nhận xóa":"Gán Nhân viên phụ trách",this.dataPopup.data=null===e||void 0===e?void 0:e.data,this.setOpenPopup({popupName:"popup-confirm-deal",isOpen:!0})),"add"!=t&&"edit"!=t||(this.dataPopup.title="add"==t?"Thêm mới cơ hội bán hàng":"Sửa thông tin cơ hội bán hàng",this.setOpenPopup({popupName:"create-deal",isOpen:!0})),"createCalen"==t&&(this.idCustomer.id=a,this.setOpenPopup({popupName:"appoint-customer",isOpen:!0}))}},{key:"handleConfirm",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("delete"!=this.dataPopup.code){e.next=6;break}if(!this.dataPopup.id||0==this.dataPopup.id){e.next=4;break}return e.next=4,this.apiDeal.deleteDealOrCusById("sales-deals",Object(g["trim"])(this.dataPopup.id.toString())).then((function(){a.$message.success("Xóa thành công"),a.setOpenPopup({popupName:"popup-confirm-deal",isOpen:!1}),a.init()})).catch((function(e){return a.$message.error(e.message)}));case 4:e.next=8;break;case 6:return e.next=8,this.apiDeal.assignDeal("sales-deals",t).then((function(){a.$message.success("Gán thành công"),a.setOpenPopup({popupName:"popup-confirm-deal",isOpen:!1}),a.init()})).catch((function(e){return a.$message.error(e.message)}));case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"loadMoreDrag",value:function(e){}},{key:"handleChangeItem",value:function(e){console.log("d",e)}},{key:"handleClickItem",value:function(e){this.$router.push({name:"dealNewsfeed",params:{type:this.$route.params.type,view:"bang-tin",id:e.id}})}},{key:"handleFiltersChange",value:function(e){this.filters=e,this.init()}},{key:"parseFilterType",value:function(e,t,a){var n=new Date(t),i=new Date(a),o="";return o="week"==e?"Tuần ".concat(n.getDate(),"/").concat(n.getMonth()+1," - ").concat(i.getDate(),"/").concat(i.getMonth()+1,"/").concat(i.getFullYear()):"month"==e?"Tháng ".concat(t):"Quý ".concat(t),o}},{key:"init",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.isLoading=!0,!(this.listPipeline.length<1)){e.next=4;break}return e.next=4,this.apiDeal.getDataSalesPipelines(this.queryLoadMorePipeline).then((function(e){a.listPipeline=e.data.content,a.query.pipelineId=a.listPipeline[0].id}));case 4:if(!(this.listPipeline.length>0)){e.next=8;break}return t=Object(g["assign"])(this.filters,this.query),e.next=8,this.apiDeal.getDataForecast("sales-deals",t).then((function(e){var t={};for(var n in e)t[n]={fromDate:e[n].from,name:"".concat(a.parseFilterType(a.query.filterType,"week"==a.query.filterType?e[n].from:n,"week"==a.query.filterType?e[n].to:n)),numOfSalesDeal:e[n].amount,totalValue:e[n].value,salesDeals:e[n].deals},a.queryLoadMore[n]={limit:10,currentStageId:n};a.dataDrag=t,a.firstFromDate=a.dataDrag[Object.keys(a.dataDrag)[0]].fromDate})).catch((function(e){return a.$message.error(e.message)}));case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"created",value:function(){this.apiDeal=Object(f["a"])("deal",{districtId:this.districtId})}}]),a}(Object(p["b"])(m["a"],y["a"]));w=Object(d["a"])([Object(p["a"])({components:{DealFilter:h["a"],Draggable:b["a"],CreateDeal:v["a"],PopupConfirmDeal:k["a"],PopupNote:C["a"],AppointCustomer:D["a"]}})],w);var O=w,P=O,M=(a("0c1f"),a("2877")),q=Object(M["a"])(P,n,i,!1,null,"6236181e",null);t["default"]=q.exports}}]);
//# sourceMappingURL=chunk-d1f24f28.2ea3fde6.js.map
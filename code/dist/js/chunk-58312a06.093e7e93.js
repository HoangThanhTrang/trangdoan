(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58312a06"],{"4eec":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"module-salary"},[a("div",{staticClass:"be-flex main-action"},[a("div",{staticClass:"be-flex main-action__left"},[a("filter-salary",{on:{search:t.handleSearch,open:t.handleOpenPopupFilter,sort:t.handleSort,change:t.handleFilter}}),a("div",{staticClass:"actions"},[a("el-button",{staticClass:"custom-button",attrs:{loading:t.isExcelLoading},on:{click:function(e){return t.handleExport("xlsx")}}},[a("span",{staticClass:"be-flex align-center"},[a("base-icon",{staticClass:"icon",attrs:{icon:"excel-fullcolor"}}),t._v(" Xuất Excel ")],1)]),a("el-button",{staticClass:"custom-button",attrs:{loading:t.isPdfLoading},on:{click:function(e){return t.handleExport("pdf")}}},[a("span",{staticClass:"be-flex align-center"},[a("base-icon",{staticClass:"icon",attrs:{icon:"pdf"}}),t._v(" Xuất PDF ")],1)])],1)],1)]),a("div",{staticClass:"salary-table salary-table--kd"},[a("base-tree-table",{attrs:{data:t.data,isLoading:t.isLoading,table:t.table,showPagination:!0,showSummary:!0,summaryMethod:t.summaryMethod,sumText:"Tổng",paginationInfo:"nhân viên",emptyText:"Không có dữ liệu lương"},on:{sizeChange:t.handleSizeChange,currentChange:t.handleCurrentChange}},[a("el-table-column",{attrs:{index:t.getIndex,type:"index",width:"70",align:"center",label:"#"}}),a("el-table-column",{attrs:{label:"mã đvkd",prop:"transactionOfficeCode",width:"100"}}),a("el-table-column",{attrs:{label:"đơn vị kinh doanh",prop:"transactionOfficeName",width:"250"}}),a("el-table-column",{attrs:{label:"Mã nv",prop:"salesMemberNo",width:"120",align:"left"}}),a("el-table-column",{attrs:{label:"Tên CBNV",prop:"salesFullName",width:"210"}}),a("el-table-column",{attrs:{label:"SL HĐ",prop:"numOfContract",width:"80",align:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("formatNumber")(e.row.numOfContract))+" ")]}}])}),a("el-table-column",{attrs:{width:"30"}}),a("el-table-column",{attrs:{label:"SL hủy",prop:"numOfCancel",width:"80",align:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("formatNumber")(e.row.numOfCancel))+" ")]}}])}),a("el-table-column",{attrs:{label:"FYP",prop:"revenueTotalAmountY1",width:"150",align:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("formatNumber")(e.row.revenueYear1Amount))+" ")]}}])}),a("el-table-column",{attrs:{label:"Lương KDTT",prop:"salarySalesAmountK1",width:"150",align:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("formatNumber")(e.row.salarySalesK1Amount))+" ")]}}])}),a("el-table-column",{attrs:{label:"RYP",prop:"revenueTotalAmountK2",width:"150",align:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("formatNumber")(e.row.revenueK2Amount))+" ")]}}])}),a("el-table-column",{attrs:{label:"Lương RYP",prop:"salarySalesAmountK2`",width:"150",align:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("formatNumber")(e.row.salarySalesK2Amount))+" ")]}}])}),a("el-table-column",{attrs:{label:"CTTĐ",prop:"emulationAmount",width:"150",align:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("formatNumber")(e.row.emulationAmount))+" ")]}}])}),a("el-table-column",{attrs:{width:"40"}}),a("el-table-column",{attrs:{label:"Tlht kpi",prop:"resultMonthRevenueTotalPercent",width:"100",align:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("formatPercent")(e.row.resultMonthRevenueYear1Percent))+" ")]}}])}),a("el-table-column",{attrs:{label:"truy thu",prop:"arrearsAmount",width:"150",align:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("formatNumber")(e.row.arrearsAmount))+" ")]}}])}),a("el-table-column",{attrs:{label:"tổng lương",prop:"salarySalesTotalAmount",width:"150",align:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("formatNumber")(e.row.salarySalesTotalAmount))+" ")]}}])})],1)],1),a("popup-filter",{on:{apply:t.search}})],1)},i=[],s=a("c964"),l=a("f3f3"),r=a("276c"),o=a("e954"),c=a("920b"),d=a("92a6"),u=(a("96cf"),a("b0c0"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("99af"),a("9ab4")),h=a("9eae"),m=a("89256"),p=a("1b40"),f=a("2ef0"),b=a("9f48"),v=a("c56f"),g=a("08ba"),y=a("4bb5"),C=Object(y["a"])("beAudit"),O=function(t){Object(c["a"])(a,t);var e=Object(d["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.data=[],t.isLoading=!1,t.table={total:100,page:1,limit:20},t.query={total:100,page:1,limit:20,contractStatus:null,keywordString:"",orderByClause:1},t.param={month:0,year:0,pageIndex:1,pageSize:20,orderByClause:1},t.summary={},t.isExcelLoading=!1,t.isPdfLoading=!1,t}return Object(o["a"])(a,[{key:"mounted",value:function(){this.init()}},{key:"handleSort",value:function(t){this.param.orderByClause=t,this.init()}},{key:"getIndex",get:function(){return this.table.limit*(this.table.page-1)+1}},{key:"created",value:function(){this.salaryReq=Object(g["a"])("salary",{districtId:this.districtId});var t=new Date;this.param.year=t.getFullYear(),this.param.month=t.getMonth()+1}},{key:"search",value:function(t){this.param=Object(l["a"])(Object(l["a"])({},this.param),t),this.param.pageIndex=1,this.table.page=1,this.init()}},{key:"init",value:function(){var t=this;this.isLoading=!0;var e=this.getFilter(this.$route.name);e&&(delete e.filters.pageIndex,delete e.filters.pageSize,this.param=Object(f["assign"])(this.param,e.filters)),console.log("filters",e);var a=Object(l["a"])(Object(l["a"])({},this.param),{},{total:null});this.salaryReq.getSalariesIndividual(a).then((function(e){t.data=e.data,t.isLoading=!1})).catch((function(){t.isLoading=!1})),this.salaryReq.getSummaryIndividual(a).then((function(e){t.table.total=e.data.total,t.summary=e.data}))}},{key:"handleFilter",value:function(t){this.param.pageIndex=1,this.table.page=1,this.init()}},{key:"handleSearch",value:function(t){this.param=Object(l["a"])(Object(l["a"])({},this.param),t),this.param.pageIndex=1,this.table.page=1,this.init()}},{key:"summaryMethod",value:function(t){var e=this,a=t.columns,n=[];return Object(f["forEach"])(a,(function(t,a){if(a<4)n[a]="";else if(4!==a){var i=e.summary[t.property];if(n[a]=i?e.$options.filters.formatNumber(i):"",14===a){var s=e.summary["resultMonthRevenueTotalPercent"];n[14]=e.$options.filters.formatPercentAdv(s)}}else n[a]="Tổng"})),n}},{key:"handleSizeChange",value:function(t){this.param.pageSize=t,this.table.limit=t,this.init()}},{key:"handleCurrentChange",value:function(t){console.log(t),this.table.page=t,this.param.pageIndex=t,this.init()}},{key:"handleOpenPopupFilter",value:function(){this.setOpenPopup({popupName:"filter-salary",isOpen:!0})}},{key:"handleExport",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var a,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("xlsx"===e?this.isExcelLoading=!0:this.isPdfLoading=!0,this.data.length){t.next=6;break}return this.$message.error("Không tìm thấy dữ liệu xuất file"),this.isExcelLoading=!1,this.isPdfLoading=!1,t.abrupt("return");case 6:null===(a=this.salaryReq)||void 0===a||a.exportReportMember(Object(l["a"])({ext:e},this.param)).then((function(t){var a=window.URL.createObjectURL(new Blob([t.data])),i=document.createElement("a");i.href=a;var s=new Date,l="".concat(s.getFullYear()).concat(s.getMonth()+1).concat(s.getDate()).concat(s.getHours()).concat(s.getMinutes()).concat(s.getMilliseconds());i.setAttribute("download","Bao_cao_luong_CBNV__".concat(l,".").concat("pdf"===e?"pdf":"xlsx")),document.body.appendChild(i),i.click(),"xlsx"===e?n.isExcelLoading=!1:n.isPdfLoading=!1})).catch((function(t){"xlsx"===e?n.isExcelLoading=!1:n.isPdfLoading=!1}));case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}]),a}(Object(p["b"])(b["a"],v["a"]));Object(u["a"])([C.Getter("getFilter")],O.prototype,"getFilter",void 0),Object(u["a"])([C.Action("setReportFilter")],O.prototype,"setReportFilter",void 0),O=Object(u["a"])([Object(p["a"])({components:{FilterSalary:h["a"],PopupFilter:m["a"]}})],O);var _=O,x=_,w=(a("803c"),a("2877")),j=Object(w["a"])(x,n,i,!1,null,"30fb5896",null);e["default"]=j.exports},"803c":function(t,e,a){"use strict";a("f1c4")},8068:function(t,e,a){},"8d8a":function(t,e,a){"use strict";a("8068")},"9eae":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"import-filter"},[a("div",{staticClass:"be-flex jc-space-between"},[a("div",{staticClass:"action-left flex"},[a("div",{staticClass:"search"},[a("span",{staticClass:"flex"},[a("base-icon",{staticClass:"icon-search",attrs:{icon:"search"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"searchBar",attrs:{type:"text",placeholder:"Tìm kiếm..."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})],1)]),a("div",{staticClass:"filter-item"},[a("div",{staticClass:"cursor text-filter",on:{click:t.handleOpenPopupFilter}},[a("span",{staticClass:"abicon"},[a("base-icon",{attrs:{icon:"filter"}})],1),t._v(" Bộ lọc ")])]),a("div",{staticClass:"sort"},[t.isCommission?a("el-dropdown",{staticClass:"import-sort",attrs:{trigger:"click"},on:{command:t.handleCommand}},[a("el-button",{staticClass:"be-button-unset custom-button"},[a("span",{staticClass:"abicon"},[a("base-icon",{staticClass:"icon",attrs:{icon:"sort"}})],1),t._v(" Sắp xếp ")]),a("el-dropdown-menu",{staticClass:"sort-menu-popper",attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.sorts,(function(e,n){return a("el-dropdown-item",{key:n,class:e.active?"active":null,attrs:{command:e.command,divided:e.divided}},[a("span",{staticClass:"be-flex"},[a("span",{staticClass:"be-flex-item"},[t._v(" "+t._s(e.label)+" ")])])])})),1)],1):a("el-dropdown",{staticClass:"import-sort",attrs:{trigger:"click"},on:{command:t.handleCommand}},[a("el-button",{staticClass:"be-button-unset custom-button"},[a("span",{staticClass:"abicon"},[a("base-icon",{staticClass:"icon",attrs:{icon:"sort"}})],1),t._v(" Sắp xếp ")]),a("el-dropdown-menu",{staticClass:"sort-menu-popper",attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.sortsOther,(function(e,n){return a("el-dropdown-item",{key:n,class:e.active?"active":null,attrs:{command:e.command,divided:e.divided}},[a("span",{staticClass:"be-flex"},[a("span",{staticClass:"be-flex-item"},[t._v(" "+t._s(e.label)+" ")])])])})),1)],1)],1)])])])},i=[],s=a("f3f3"),l=a("276c"),r=a("e954"),o=a("920b"),c=a("92a6"),d=(a("4de4"),a("ac1f"),a("841c"),a("b0c0"),a("9ab4")),u=a("1b40"),h=a("6d3f"),m=a("2ef0"),p=a("4bb5"),f=Object(p["a"])("beAudit"),b=function(t){Object(o["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(l["a"])(this,a),t=e.apply(this,arguments),t.members=[],t.filter={search:""},t.search="",t.sorts=[{command:"1",label:"Mã đơn vị kinh doanh",divided:!1},{command:"6",label:"Tổng phí",divided:!1},{command:"5",label:"Mã sản phẩm",divided:!1}],t.sortsOther=[{command:"1",label:"Mã đơn vị kinh doanh",divided:!1},{command:"2",label:"Số hợp đồng",divided:!0},{command:"3",label:"Số hủy",divided:!1},{command:"4",label:"Tỷ lệ hoàn thành KPI",divided:!1},{command:"5",label:"Doanh số",divided:!0},{command:"6",label:"Lương kinh doanh",divided:!1},{command:"7",label:"Chương trình thi đua",divided:!1},{command:"8",label:"Truy thu",divided:!1},{command:"9",label:"Tổng lương",divided:!1}],t.searchText=Object(m["debounce"])((function(e){t.$emit("search",Object(s["a"])(Object(s["a"])({},e),{},{search:Object(m["trim"])(e.search)}))}),500),t}return Object(r["a"])(a,[{key:"created",value:function(){var t=this.getFilter(this.$route.name);t&&t.filters&&t.filters.search?this.search=t.filters.search:this.search=""}},{key:"handleSearch",value:function(t){var e,a,n=this.getFilter(this.$route.name);n&&(this.filter=Object(s["a"])(Object(s["a"])(Object(s["a"])({},n.filters),this.filter),{},{search:this.search})),this.filter.search!=(null===n||void 0===n||null===(e=n.filters)||void 0===e?void 0:e.search)&&this.searchText(this.filter),this.setReportFilter({contract:null===(a=this.$route)||void 0===a?void 0:a.name,filters:Object(s["a"])(Object(s["a"])({},this.filter),{},{search:this.search})})}},{key:"handleCommand",value:function(t){var e=this;this.isCommission?Object(m["forEach"])(this.sorts,(function(a){console.log(a.command),a.command===t?(a.active=!0,e.$forceUpdate()):a.active=!1})):Object(m["forEach"])(this.sortsOther,(function(a){a.command===t?(a.active=!0,e.$forceUpdate()):a.active=!1})),this.$forceUpdate(),this.$emit("sort",+t)}},{key:"handleOpenPopupFilter",value:function(){this.$emit("open",this.isCommission)}}]),a}(u["d"]);Object(d["a"])([f.Action("setReportFilter")],b.prototype,"setReportFilter",void 0),Object(d["a"])([f.Getter("getFilter")],b.prototype,"getFilter",void 0),Object(d["a"])([Object(u["c"])({required:!1,type:Boolean,default:!1})],b.prototype,"isCommission",void 0),Object(d["a"])([Object(u["e"])("search",{immediate:!1})],b.prototype,"handleSearch",null),b=Object(d["a"])([Object(u["a"])({components:{BaseIcon:h["a"]}})],b);var v=b,g=v,y=(a("8d8a"),a("2877")),C=Object(y["a"])(g,n,i,!1,null,"12df6e7a",null);e["a"]=C.exports},f1c4:function(t,e,a){}}]);
//# sourceMappingURL=chunk-58312a06.093e7e93.js.map
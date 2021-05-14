"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bookmark = void 0;
var Bookmark = /** @class */ (function () {
    function Bookmark() {
        this.url = new URL("http://www.example.com/?filterBy=filter1&filterBy=filter2&groupBy=group1&groupBy=group2");
        this.queryParams = new URLSearchParams();
        this.filterBySelectedOptions = [];
        this.groupBySelectedOptions = [];
    }
    Bookmark.prototype.getUrlFromBrowser = function () {
        // const url = window.location.href;
        var url = "http://www.example.com/?filterBy=filter1&filterBy=filter2&groupBy=group1&groupBy=group2";
        this.url = new URL(url);
        this.queryParams = new URLSearchParams(this.url.search);
    };
    Bookmark.prototype.updateQueryParams = function () {
        var _this = this;
        this.queryParams.delete("filterBy");
        this.queryParams.delete("groupBy");
        this.filterBySelectedOptions.forEach(function (value) {
            _this.queryParams.append('filterBy', value);
        });
        this.groupBySelectedOptions.forEach(function (value) {
            _this.queryParams.append('groupBy', value);
        });
    };
    Bookmark.prototype.setQueryParamsToBrowser = function () {
        history.replaceState({}, '', '?' + this.queryParams);
    };
    Bookmark.prototype.modifyQueryParamsByUrl = function () {
        this.filterBySelectedOptions = this.queryParams.getAll("filterBy");
        this.groupBySelectedOptions = this.queryParams.getAll("groupBy");
    };
    Bookmark.prototype.modifyQueryParamsByPassedValues = function (filterBySelectedOptions, groupBySelectedOptions) {
        this.filterBySelectedOptions = __spreadArray([], filterBySelectedOptions);
        this.groupBySelectedOptions = __spreadArray([], groupBySelectedOptions);
    };
    return Bookmark;
}());
exports.Bookmark = Bookmark;

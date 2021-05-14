import { Bookmark } from "../src/bookmark";
describe("test add function", () => {
	let bookmark: Bookmark;
	beforeEach(() => {
		bookmark = new Bookmark();
	})
	it("get window location href", () => {
		bookmark.getUrlFromBrowser();
		expect(bookmark.url.toString()).toBe("http://www.example.com/?filterBy=filter1&filterBy=filter2&groupBy=group1&groupBy=group2");
	});

	it("get query params", () => {
		bookmark.getUrlFromBrowser();
		expect(bookmark.queryParams.toString()).toBe("filterBy=filter1&filterBy=filter2&groupBy=group1&groupBy=group2");
	});
	
	it("get base path", () => {
		bookmark.getUrlFromBrowser();
		bookmark.modifyQueryParamsByUrl();
		expect(bookmark.filterBySelectedOptions).toEqual(['filter1', 'filter2']);
		expect(bookmark.groupBySelectedOptions).toEqual(['group1', 'group2']);
	});

	it("change path", () => {
		bookmark.getUrlFromBrowser();
		bookmark.modifyQueryParamsByUrl();
		bookmark.updateQueryParams();
		expect(bookmark.queryParams.toString()).toBe("filterBy=filter1&filterBy=filter2&groupBy=group1&groupBy=group2");
	});

	it("modify query params by passed values", () => {
		bookmark.getUrlFromBrowser();
		bookmark.modifyQueryParamsByPassedValues(["filter3", "filter4"], ["group3", "group4"]);
		bookmark.updateQueryParams();
		expect('?'+bookmark.queryParams.toString()).toBe("?filterBy=filter3&filterBy=filter4&groupBy=group3&groupBy=group4");
	});
});
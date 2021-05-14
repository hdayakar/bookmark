class Bookmark {
	public url: URL;
	public queryParams: URLSearchParams;
	public filterBySelectedOptions: string[];
	public groupBySelectedOptions: string[];

	constructor() {
		this.url = new URL("http://www.example.com/?filterBy=filter1&filterBy=filter2&groupBy=group1&groupBy=group2");
		this.queryParams = new URLSearchParams();
		this.filterBySelectedOptions = [];
		this.groupBySelectedOptions = [];
	}

	public getUrlFromBrowser() {
		// const url = window.location.href;
		const url = "http://www.example.com/?filterBy=filter1&filterBy=filter2&groupBy=group1&groupBy=group2";
		this.url = new URL(url);
		this.queryParams = new URLSearchParams(this.url.search);
	}

	public updateQueryParams(): void {
		this.queryParams.delete("filterBy");
		this.queryParams.delete("groupBy");
		
		this.filterBySelectedOptions.forEach((value) => {
			this.queryParams.append('filterBy', value)
		});

		this.groupBySelectedOptions.forEach((value) => {
			this.queryParams.append('groupBy', value)
		});
	}
	
	public setQueryParamsToBrowser() {
		history.replaceState({}, '', '?'+this.queryParams);
	}

	public modifyQueryParamsByUrl(): void {
		this.filterBySelectedOptions = this.queryParams.getAll("filterBy");
		this.groupBySelectedOptions = this.queryParams.getAll("groupBy");
	}

	public modifyQueryParamsByPassedValues(filterBySelectedOptions: string[], groupBySelectedOptions: string[]): void {
		this.filterBySelectedOptions = [...filterBySelectedOptions];
		this.groupBySelectedOptions = [...groupBySelectedOptions];
	}
}

export { Bookmark }

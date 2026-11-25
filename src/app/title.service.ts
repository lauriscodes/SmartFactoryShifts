import { Injectable, signal } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class TitleService {
	private readonly _title = signal<string>("App");
	readonly title = this._title;

	setTitle(newTitle: string): void {
		this._title.set(newTitle);
	}
}

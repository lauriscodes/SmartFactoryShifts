import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TitleService } from "./title.service";
import { TitleComponent } from "./title.component";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, TitleComponent],
	templateUrl: "./app.html",
	styleUrl: "./app.scss"
})
export class App {
	private readonly chapterTitleService = inject(TitleService);
	protected readonly title = this.chapterTitleService.title;
	// To set the title, use: this.chapterTitleService.setTitle('new-title');

	constructor() {
		this.chapterTitleService.setTitle("SmartFactory Shifts");
	}
}

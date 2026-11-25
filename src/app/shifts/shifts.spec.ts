import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideNoopAnimations } from "@angular/platform-browser/animations";
import { provideRouter } from "@angular/router";

import { Shifts } from "./shifts";

describe("Shifts", () => {
	let component: Shifts;
	let fixture: ComponentFixture<Shifts>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [Shifts],
			providers: [provideNoopAnimations(), provideRouter([])]
		}).compileComponents();

		fixture = TestBed.createComponent(Shifts);
		component = fixture.componentInstance;
		fixture.detectChanges();
		await fixture.whenStable();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});

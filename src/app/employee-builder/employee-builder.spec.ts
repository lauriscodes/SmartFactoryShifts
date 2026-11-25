import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideNoopAnimations } from "@angular/platform-browser/animations";

import { EmployeeBuilder } from "./employee-builder";

describe("EmployeeBuilder", () => {
	let component: EmployeeBuilder;
	let fixture: ComponentFixture<EmployeeBuilder>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [EmployeeBuilder],
			providers: [provideNoopAnimations()]
		}).compileComponents();

		fixture = TestBed.createComponent(EmployeeBuilder);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});

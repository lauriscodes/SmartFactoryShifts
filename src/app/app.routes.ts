import { Routes } from "@angular/router";

export const routes: Routes = [
	{ path: "", pathMatch: "full", redirectTo: "employees" },
	{ path: "employees", loadComponent: () => import("./employee-builder/employee-builder").then((m) => m.EmployeeBuilder) },
	{ path: "shifts", loadComponent: () => import("./shifts/shifts").then((m) => m.Shifts) }
];

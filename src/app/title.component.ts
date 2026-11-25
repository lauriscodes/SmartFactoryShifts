import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
	selector: "app-title",
	template: `
		<header>
			<div class="bar">
				<h1 class="brand"><span class="brand-mark" aria-hidden="true"></span>{{ title() }}</h1>
				<nav aria-label="Main navigation">
					<a routerLink="/employees" routerLinkActive="active" ariaCurrentWhenActive="page">Employees</a>
					<a routerLink="/shifts" routerLinkActive="active" ariaCurrentWhenActive="page">Shifts</a>
				</nav>
			</div>
		</header>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink, RouterLinkActive],
	styles: `
		header {
			background: var(--header);
			color: white;
			border-bottom: 1px solid #294741;
		}

		.bar {
			width: min(100%, var(--workspace));
			min-height: 4.75rem;
			margin-inline: auto;
			padding-inline: var(--gutter);
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 0.75rem 2rem;
		}

		.brand {
			margin: 0;
			display: flex;
			align-items: center;
			gap: 0.7rem;
			font-size: 1.125rem;
			font-weight: 650;
			letter-spacing: -0.025em;
		}

		.brand-mark {
			width: 2.125rem;
			aspect-ratio: 1;
			flex: none;
			border-radius: 0.55rem;
			background:
				linear-gradient(var(--header), var(--header)) 0.5rem 0.53rem / 0.75rem 0.18rem no-repeat,
				linear-gradient(var(--header), var(--header)) 0.5rem 0.98rem / 1.125rem 0.18rem no-repeat,
				linear-gradient(var(--header), var(--header)) 0.5rem 1.43rem / 0.9rem 0.18rem no-repeat,
				#99e3c9;
		}

		nav {
			display: flex;
			gap: 0.25rem;
		}

		a {
			padding: 0.6rem 0.875rem;
			border-radius: 0.45rem;
			color: #c2d4ce;
			font-size: 0.9rem;
			font-weight: 600;
			text-decoration: none;

			&:hover {
				color: white;
				background: #25413c;
			}

			&.active {
				color: #b9f5de;
				background: #294b43;
			}

			&:focus-visible {
				outline-color: #b9f5de;
			}
		}

		@media (max-width: 32rem) {
			.bar {
				flex-wrap: wrap;
				padding-block: 0.75rem;
			}

			nav {
				width: 100%;
			}
		}
	`
})
export class TitleComponent {
	title = input<string>("");
}

import Header from '../components/Header.astro';
import { Astro } from './Layout.astro';

<Fragment>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="description" content="Astro description" />
<meta name="viewport" content="width=device-width" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<meta name="generator" content={Astro.generator} />
<title>{title}</title>
</head>
<body>
<Header />
<slot />
</body>
</html>
<style is:global>{`
	:root {
		--accent: 136, 58, 234;
		--accent-light: 224, 204, 250;
		--accent-dark: 49, 10, 101;
		--accent-gradient: linear-gradient(
			45deg,
			rgb(var(--accent)),
			rgb(var(--accent-light)) 30%,
			white 60%
		);
	}
	html {
		font-family: system-ui, sans-serif;
		background: #13151a;
		background-size: 224px;
	}
	code {
		font-family:
			Menlo,
			Monaco,
			Lucida Console,
			Liberation Mono,
			DejaVu Sans Mono,
			Bitstream Vera Sans Mono,
			Courier New,
			monospace;
	}
`}</style>

</Fragment>;

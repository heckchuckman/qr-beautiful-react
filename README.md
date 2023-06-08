# qr-beautiful

[Based on the amazing work by CPunisher](https://github.com/CPunisher/react-qrbtf)

[![Npm Version][npm-version-image]][npm-version-url]
[![License][license-image]][license-url]

-   **6 Different QRCode Styles** - Change the parameters to show your favourite

-   **Make Your Own** - Use the API to make your own QRCode styles

## Demo

![QR codes](https://github.com/ciaochaos/qrbtf/raw/master/public/img/QRcodes.jpg)

[**Live Demo**](https://qrbtf.com)

### Installation & Usage

```sh
npm install react-qrbtf
```

### Docs

[Read docs here](http://cpunisher.github.io/react-qrbtf/) (not yet completed)

### Basic use

```js
import React from "react"
import { QR25D, encodeData } from "react-qrbtf"

export default function QRTest() {
	const qrcode = encodeData({ text: "react-qrbtf" })
	return (
		<div className="test">
			<QR25D qrcode={qrcode} />
		</div>
	)
}
```

[npm-version-image]: https://img.shields.io/npm/v/react-qrbtf
[npm-version-url]: https://www.npmjs.com/package/react-qrbtf
[license-image]: http://img.shields.io/npm/l/react-qrbtf.svg
[license-url]: LICENSE

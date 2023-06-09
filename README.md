# qr-beautiful-react

[Based on the amazing work by CPunisher](https://github.com/CPunisher/react-qrbtf)
(this library is a fork of the original, with optimizations, updated pattersn, and new features)

[![Npm Version][npm-version-image]][npm-version-url]
[![License][license-image]][license-url]

-   **6 Different QRCode Styles** - Change the parameters to show your favourite

-   **Make Your Own** - Use the API to make your own QRCode styles

## Demo

![QR codes](https://github.com/ciaochaos/qrbtf/raw/master/public/img/QRcodes.jpg)

[**Live Demo**](https://qrbtf.com)

### Installation & Usage

```sh
npm install qr-beautiful-react
```

### Docs

[Read docs here](http://cpunisher.github.io/react-qrbtf/) (not yet completed)

### Basic use

```js
import React from "react"
import { QR25D, encodeData } from "qr-beautiful-react"

export default function QRTest() {
	const qrcode = encodeData({ text: "This is a test!" })
	return (
		<div className="test">
			<QR25D qrcode={qrcode} />
		</div>
	)
}
```

# Shoutcast Metrics

A lightweight TypeScript library for fetching metrics from Shoutcast servers.

## Installation

```bash
# Using npm
npm install @juliangorge/shoutcast-metrics

# Using yarn
yarn add @juliangorge/shoutcast-metrics
```

## Usage

### Node.js (ESM)

```javascript
import { getMetrics } from "@juliangorge/shoutcast-metrics";

const metrics = await getMetrics("http://your-shoutcast-server.com:8000");
```

### Node.js (CommonJS)

```javascript
const { getMetrics } = require("@juliangorge/shoutcast-metrics");

const metrics = await getMetrics("http://your-shoutcast-server.com:8000");
```

### Browser

Include the script in your HTML:

```html
<script src="path/to/dist/client.min.js"></script>
```

Then use it in your JavaScript:

```javascript
const metrics = await window.BFS.getMetrics("http://your-shoutcast-server.com:8000");
```

## Features

- 🚀 Lightweight and fast
- 📦 Works in both Node.js and browser environments
- 🔄 Built-in TypeScript support
- 🛠️ Uses modern ES modules
- 🔍 XML parsing for Shoutcast server responses

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build the package
npm run build

# Format code
npm run format

# Lint code
npm run lint
```

## License

MIT © [Julian Gorge](https://github.com/juliangorge)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

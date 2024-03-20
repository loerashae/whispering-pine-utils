# whispering-pine-utils

A set of utility functions for common tasks like validation, date formatting, and slugification. This lightweight library is perfect for projects that require basic utility functions without the overhead of larger libraries.

## Installation

To install the library, run:

```bash
npm install whispering-pine-utils
```

## Usage

### Validating an Email

```javascript
import { isValidEmail } from 'whispering-pine-utils';

console.log(isValidEmail('example@test.com')); // true
console.log(isValidEmail('invalid-email')); // false
```

### Formatting a Date

```javascript
import { formatDate } from 'whispering-pine-utils';

console.log(formatDate(new Date(), 'dd-mm-yyyy')); // '20-03-2024'
console.log(formatDate(new Date(), 'mm/dd/yyyy')); // '03/20/2024'
```

### Slugifying a String

```javascript
import { slugify } from 'whispering-pine-utils';

console.log(slugify('Some Text Here!')); // 'some-text-here'
console.log(slugify('Another Text!')); // 'another-text'
```

## Contributing

We welcome contributions! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## Licensing

This project is licensed under the MIT License - see the LICENSE file for details.

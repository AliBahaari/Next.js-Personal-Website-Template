# Next.js Personal Website Template

The project is related to Next.js and you can create a simple template as your personal website.

## Usage/Examples

Just complete the properties below in `pages/api/profile-information.js` file:

```javascript
title: 'Ali Bahaari | Lorem Ipsum',
avatarName: 'Me.png',   // In `public` Folder
nameFamily: 'Ali Bahaari',
biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque, metus et molestie auctor, ipsum massa fringilla enim, non consectetur eros arcu interdum elit. Vivamus vitae erat pulvinar, accumsan nisl quis, consequat lorem. Nam in facilisis tortor, in iaculis felis. Nullam pretium tortor eu diam tincidunt, vel convallis augue tincidunt. Quisque orci lorem, lobortis a nulla vitae, imperdiet fermentum ligula. Sed in interdum nisi. Sed posuere iaculis sem, eget iaculis sapien pharetra quis.',
socialNetworks: [
    { name: 'Instagram', link: 'https://instagram.com/...' },
    { name: 'Telegram', link: 'https://telegram.org/...' },
    { name: 'Twitter', link: 'https://twitter.com/...' },
    { name: 'LinkedIn', link: 'https://linkedin.com/in/AliBahaari' }
]
```

Then, use the commance below:

```bash
npm run dev
```

Now, check `http://localhost:3000` and BOOM!
Your personal website is ready!

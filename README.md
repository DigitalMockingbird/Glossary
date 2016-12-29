
Web Developer Test

# Quick start

```bash
npm install
npm run server
```

# Program notes

- The application is split into glossary and link (/button) logic.

- The buttons follows the file pattern App.js > Links.js > GlossaryLinks.js > Link.js > GlossaryLink.js

- The glossary follows the file pattern App.js > GlossaryContainer.js > GlossaryTable.js > GlossaryEntry.js

- Entry is hooked up to App.js, which serves as a container for the glossary and manipulation buttons.

The state can be represented as the following:


# TODO

For this test

- Fix the `GlossaryTable` component to display french words
- Add actions and reducers to modify the store
  - Sort words by english
  - Remove duplicates (a duplicate occurs when both english and french words of two elements are equal)
- Add bootstrap styled buttons to trigger the custom actions you created earlier

After completing the tasks please submit the completed project back in a `.zip` without version controlled or temporary files.

# Notes

This test assumes some familiarity with web developer tools.  It is also open ended in some areas - we want to see how you might approach each of the given tasks.

If you are not familiar with these tools, see the resources below and remember that we don't emphasize a time limit.

# Resources

- [React](https://facebook.github.io/react/)
- [Redux](http://redux.js.org/)
- [Webpack](https://webpack.github.io/)

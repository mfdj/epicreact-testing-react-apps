**Context**

After a long hiatus decided to pick back up on [epicreact.dev - testing react apps](https://www.epicreact.dev/modules/testing-react-apps-v1)

Repository cloned/forked from [github.com/kentcdodds/testing-react-apps](https://github.com/kentcdodds/testing-react-apps)

**Project setup**

 - Forked at [a44c2d1](https://github.com/mfdj/epicreact-react-fundamentals/commit/a44c2d11d3f0a20fd5f14996d3dbd6729d924635)
 - Customize for my learning #1 preps the repo for my solo note taking 
 
**Exercises**
 
0. [testing-react-apps-welcome](https://www.epicreact.dev/modules/testing-react-apps-v1/testing-react-apps-welcome)
    * Repo setup [#1](https://github.com/mfdj/epicreact-testing-react-apps/pull/1)
    * Read But really, [what is a JavaScript Test?](https://kentcdodds.com/blog/but-really-what-is-a-javascript-test) and [what is a JavaScript Mock?](https://kentcdodds.com/blog/but-really-what-is-a-javascript-mock) which are both classic KCD "from the ground up" intros
    * the lesson makes mention of `src/__tests__/exercise/00.md` but it doesn't exist in git… so skipping that
0. [simple-test-with-reactdom-intro](https://www.epicreact.dev/modules/testing-react-apps-v1/simple-test-with-reactdom-intro)
    * Implemented with [act](https://react.dev/reference/react/act#reference) and enjoyed hand-rolling element selection and interaction with the [Document API](https://developer.mozilla.org/en-US/docs/Web/API/Document)
    * `console.log(document.body.innerHTML)` is a hand way to debug what is being rendered
    * useful reminder about the need to clean up the DOM, like `beforeEach(() => document.body.innerHTML = '')`
    * [click()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click) is a legacy API that simulates a mouse click but `dispatchEvent(new MouseEvent(…))` is much closer to the actual behavior
0. [simple-test-with-react-testing-library-intro](https://www.epicreact.dev/modules/testing-react-apps-v1/simple-test-with-react-testing-library-intro)
    * Great read [Fix the "not wrapped in act(...)" warning](https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning)
    * used RTL helpers to manage React rendering and synthetic events leading to lower boilerplate

## Reproduce React scripts 5 issue with Cy 10 component test

This repo is just CRA 5 with a minimal Cypress 10 install. There is a simple component test that mounts the app.

On running the test, we get a crash on MacBook Pro, Mac Monterey 12.4, Intel Core i9.

To reproduce:

```bash
git clone https://github.com/muratkeremozcan/cra5-cy10-test.git
cd cra5-cy10-test
nvm use
yarn install
yarn cy:open-ct
```

[Works in CI](https://github.com/muratkeremozcan/cra5-cy10-test/runs/7319634870?check_suite_focus=true). Works if we downgrade react-scripts to v4, however that is a blocker for component test code coverage. More data [here](https://github.com/muratkeremozcan/react-hooks-in-action-with-cypress/pull/168). TL, DR; with react-scripts 5, we cannot configure webpack ([as in this commit](https://github.com/muratkeremozcan/react-hooks-in-action-with-cypress/pull/168/commits/1515ee27357ba3f67962a3aaed622bf90a99a065)) so that we can get coverage from component tests.

<img src="./cra5-cy10-ct-crash.gif">

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/54e5cb90hk1ajzckmj5y.png)

Workaround:

If you run into the problem, the solution is [here](https://github.com/cypress-io/cypress/issues/22762#issuecomment-1185677066); use any other port than 8080 for the dev server.

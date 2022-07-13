## Reproduce React scripts 5 issue with Cy 10 component test

This repo is just CRA 5 with a minimal Cypress 10 install. There is a simple component test that mounts the app.

On running the test, we get a crash on Mac Monterey 12.4.

To reproduce:

```bash
yarn install
yarn cy:open-ct
```

> [Works in CI](https://github.com/muratkeremozcan/cra5-cy10-test/runs/7319634870?check_suite_focus=true)

<img src="./cra5-cy10-ct-crash.gif">

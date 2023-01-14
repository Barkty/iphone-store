
// eslint-disable-next-line no-undef
const { NODE_ENV, REACT_APP_DEV_BACKEND, REACT_APP_TEST_BACKEND, REACT_APP_PRO_BACKEND } = process.env

const env = NODE_ENV;

const development = {
  api: {
    uri: REACT_APP_DEV_BACKEND || REACT_APP_TEST_BACKEND,
  },
};
const test = {
  api: {
    uri: REACT_APP_TEST_BACKEND,
  },
};
const production = {
  api: {
    uri: REACT_APP_PRO_BACKEND,
  },
};

const stage = {
  development,
  test,
  production,
};

export const environment = stage[env];
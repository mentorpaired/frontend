import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import githubAuthActions from "../githubAuthAction";
import * as actionTypes from "../actionTypes";
import fetchMock from "fetch-mock";
import expect from "expect";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const url = process.env.REACT_APP_BACKEND_PROXY_URL;

describe("githubAuthActions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  const code = JSON.stringify("5432randomstring");

  it("creates GITHUB_LOGIN_SUCCESS when valid github code is sent to the url and the user is logged in successfully", () => {
    fetchMock.postOnce(`${url}/github_auth/`, {
      body: { code },
      headers: { "content-type": "application/json" },
    });

    const expectedActions = [
      {
        type: actionTypes.GITHUB_LOGIN_SUCCESS,
        body: { user: { id: 1, username: "user", email: "user@user.com" } },
      },
    ];
    const store = mockStore({ user: null });

    return store.dispatch(githubAuthActions(code)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

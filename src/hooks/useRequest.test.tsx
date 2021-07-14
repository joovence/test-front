import React from "react";
import { useRequest } from "./useRequest";
import { renderHook } from "@testing-library/react-hooks";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const url = "https://tech-test.joovence.dev/api/asd";
const mock = new MockAdapter(axios);

describe("useRequest", () => {
  test("useRequest sets loading to false and returns empty array", async () => {
    mock.onGet(url).networkError();

    const { result, waitForNextUpdate } = renderHook(() => useRequest("GET", "asd"));

    expect(result.current.apiData).toEqual([]);
    expect(result.current.isLoading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.apiData).toEqual([]);
    expect(result.current.isLoading).toBeFalsy();
  });

  test("useRequest performs GET request", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useRequest("GET", "asd"));
    const response = { data: [{ id: "anyID" }] };
    mock.onGet(url).reply(200, response);
    expect(result.current.apiData).toEqual([]);
    expect(result.current.isLoading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.apiData).toEqual(response);
    expect(result.current.isLoading).toBeFalsy();
  });
});

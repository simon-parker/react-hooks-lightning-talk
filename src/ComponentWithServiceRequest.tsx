import React, { FunctionComponent, useEffect, useState } from "react";
import { fetchDataFromApi } from "./api";

interface Props {
  id: string
}

export const ComponentWithServiceRequest: FunctionComponent<Props> = (props) => {
  const value = useApiValue(props.id);

  return <span>value is {value}</span>
};

function useApiValue(id: string) {
  const [value, updateState] = useState('default');

  useEffect(() => fetchDataFromApi(id, updateState), [id]);

  return value;
}


import { useEffect, useState, useContext } from 'react';
import { LocationContext } from 'contexts/location';
import qs from 'query-string';

export function useQueryParams() {
  const [params, setParams] = useState({});
  const location = useContext(LocationContext);

  useEffect(() => {
    setParams(qs.parse(location.search));
  }, [location.search]);

  return params;
}

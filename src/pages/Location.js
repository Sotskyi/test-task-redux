import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@material-ui/core/Button";

import { fetchItems } from "../redux/action-creator/itemsAction";
import { Loader } from "../UI/components/Loader";
import { PaginationList } from "../UI/components/Pagination";
import { FilterInput } from "../UI/components/FilterInput";
import { createFilterEndpoints } from "../utils/createFiltersEndpoints";
import { TableForEpisodes } from "../UI/components/TableForEpisodes";

export const Location = () => {
  const [filterOptions, setFilterOptions] = useState({ page: 1 });
  const [showFilters, setShowFilters] = useState(null);
  const loading = useSelector((state) => state.items.loading);
  const itemsState = useSelector((state) => state.items.data);
  const error = useSelector((state) => state.items.error);
  const dispatch = useDispatch();
  const endpoint = createFilterEndpoints("location", filterOptions);

  const hanldeChangeFilters = (event, value) =>
    setFilterOptions((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });

  const handleChangePage = (event, value) => {
    setFilterOptions((prev) => {
      return { ...prev, page: value };
    });
  };

  const submitFilters = () => {
    if (Object.keys(filterOptions).length > 1) setShowFilters(true);
    dispatch(fetchItems(endpoint));
  };

  const clearFilters = () => {
    setFilterOptions({ page: 1 });
    setShowFilters(null);
    dispatch(fetchItems("location"));
  };

  useEffect(() => {
    dispatch(fetchItems(endpoint));
  }, [filterOptions.page]);

  return (
    <>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <FilterInput name={"name"} onChange={hanldeChangeFilters} />
            <FilterInput name={"type"} onChange={hanldeChangeFilters} />
            <FilterInput name={"dimension"} onChange={hanldeChangeFilters} />
            <Button
              style={{
                height: "50%",

                backgroundColor: "white",
                color: "black",
                border: "2px solid #008CBA",
              }}
              onClick={submitFilters}
            >
              Submit Filters
            </Button>
            <Button
              style={{
                height: "50%",
                marginLeft: "5px",
                backgroundColor: "green",
                color: "black",
                border: "2px solid #008CBA",
              }}
              onClick={clearFilters}
            >
              Clear
            </Button>
            {showFilters && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "10px",
                }}
              >
                sorted by
                {Object.keys(filterOptions).map((el) => {
                  if (el === "page") {
                    return null;
                  }
                  return <div style={{ color: "red" }}>{el}</div>;
                })}
              </div>
            )}
          </Box>
          <TableForEpisodes data={itemsState} />
          <PaginationList
            currentPage={filterOptions.page}
            countPages={itemsState.info?.pages}
            handleChange={handleChangePage}
          />
        </>
      )}
    </>
  );
};

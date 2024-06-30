import React, { useEffect } from "react";
import Data from "../../components/Dashboard/Data";
import Form from "../../components/Dashboard/Form";
import { useDispatch, useSelector } from "react-redux";
import { FetchAppointments, FetchUserProfile } from "../../redux/slices/app";
function DashboardPage() {
  const dispatch = useDispatch();

  const shouldFetch = useSelector((state) => state.app.shouldFetch);
  useEffect(() => {
    dispatch(FetchUserProfile());
  }, [dispatch, shouldFetch]);

  useEffect(() => {
    dispatch(FetchAppointments());
  }, [dispatch, shouldFetch]);
  return (
    <div>
      <Form />
      <Data />
    </div>
  );
}

export default DashboardPage;

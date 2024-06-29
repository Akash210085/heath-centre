import React, { useEffect } from "react";
import Data from "../../components/Dashboard/Data";
import Form from "../../components/Dashboard/Form";
import { useDispatch, useSelector } from "react-redux";
import { FetchUserProfile } from "../../redux/slices/app";
function DashboardPage() {
  const dispatch = useDispatch();

  const shouldFetchProfile = useSelector(
    (state) => state.app.shouldFetchProfile
  );
  useEffect(() => {
    dispatch(FetchUserProfile());
  }, [dispatch, shouldFetchProfile]);
  return (
    <div>
      <Form />
      <Data />
    </div>
  );
}

export default DashboardPage;

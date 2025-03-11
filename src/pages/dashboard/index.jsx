import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setBreadcrumbs } from "@/store/common/commonSlice";
import GlobalDwawer from "@/components/partials/globalDrawer";
import HomeBredCurbs from "./HomeBredCurbs";
import { handleCustomizer } from "@/store/layout";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const {customizer} = useSelector((state) => state.layout);
  const dispatch = useDispatch();

  useEffect(() => {
      const breadCrumb = [
        {
          label: "Dashboard",
          path: "#",
        },
      ]
      dispatch(setBreadcrumbs(breadCrumb));
  }, [dispatch]);

  return (
    <div>
      <>
        <button onClick={() => dispatch(handleCustomizer(true))}>Show Drawer</button>
          {customizer && 
            <GlobalDwawer>
              <>This is Drawer</>
            </GlobalDwawer>
          }
        {/* {show && (
        )} */}
      </>
    </div>
  );
};

export default Dashboard;

import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Home pages & dashboard

const Login = lazy(() => import("../pages/auth/login"));
const Error = lazy(() => import("../pages/404"));

import Layout from "../layout/Layout";
import AuthLayout from "../layout/AuthLayout";
const ComingSoonPage = lazy(() => import("../pages/utility/coming-soon"));
const UnderConstructionPage = lazy(() => import("../pages/utility/under-construction"));
import Loading from "@/components/Loading";
import { settingsUrl, singleStudentsUrl, studentsUrl, tutorssinglrUrl, tutorsUrl, parentsUrl, singleParentsUrl, jobsUrl } from "@/constant/data";

// Pages
const Settings = lazy(() => import("../pages/settings"));
const Parents = lazy(() => import("../pages/parents"));
const Students = lazy(() => import("../pages/students"));
const Tutors = lazy(() => import("../pages/tutors"));
const Jobs = lazy(() => import("../pages/jobs")); // This is now pointing to your index.jsx for jobs
const Dashboard = lazy(() => import("../pages/dashboard"));
const SibngleStudentProfile = lazy(() => import("../pages/students/studentProfile/singleStudentProfile"));
const SibngleTutorProfile = lazy(() => import("../pages/tutors/tutorProfile/SingleTutorProfile"));
const SingleParentsProfile = lazy(() => import("../pages/parents/parentsProfile/SingleParentsProfile"));

function Allroutes() {
  return (
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path={`${settingsUrl}`} element={<Settings />} />
          <Route path={`${studentsUrl}`} element={<Students />} />
          <Route path={`${tutorsUrl}`} element={<Tutors />} />
          <Route path={`${parentsUrl}`} element={<Parents />} />
          <Route path={`${singleStudentsUrl}/:id`} element={<SibngleStudentProfile />} />
          <Route path={`${tutorssinglrUrl}/:id`} element={<SibngleTutorProfile />} />
          <Route path={`${singleParentsUrl}/:id`} element={<SingleParentsProfile />} />
          <Route path={`${jobsUrl}`} element={<Jobs />} /> {/* Add this line for the Jobs index page */}
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>
        <Route
          path="/404"
          element={
            <Suspense fallback={<Loading />}>
              <Error />
            </Suspense>
          }
        />
        <Route
          path="/coming-soon"
          element={
            <Suspense fallback={<Loading />}>
              <ComingSoonPage />
            </Suspense>
          }
        />
        <Route
          path="/under-construction"
          element={
            <Suspense fallback={<Loading />}>
              <UnderConstructionPage />
            </Suspense>
          }
        />
      </Routes>
  );
}

export default Allroutes;

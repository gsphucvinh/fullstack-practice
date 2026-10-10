import { Route, Routes } from "react-router";
import DefaultLayout from "../layouts/DefaultLayout";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";

export default function AppRoutes () {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<HomePage />} />
                <Route path="search" element={<SearchPage />} />
            </Route>
        </Routes>
    )
}
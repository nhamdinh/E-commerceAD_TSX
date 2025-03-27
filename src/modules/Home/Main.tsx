import React, { memo, useEffect, useState } from "react";
import TopTotal from "./TopTotal";
import LatestOrder from "./LatestOrder";
import SaleStatistics from "./SalesStatistics";
import ProductsStatistics from "./ProductsStatistics";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/store";
import { openToast } from "@/store/slice";
// import { getUserInfo } from "../../store/selector/RootSelector";

const Main = memo(() => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation();
  // const userInfo = useSelector(getUserInfo);
  const userInfo = {};
  const [orders, setorders] = useState<any>([]);
  // const {
  //   data: dataFetch,
  //   error,
  //   isSuccess,
  //   isLoading,
  // } = useGetOrderAdQuery(
  //   {},
  //   {
  //     refetchOnMountOrArgChange: true,
  //     skip: false,
  //   }
  // );

  // useEffect(() => {
  //   if (isSuccess) {
  //     let ods = dataFetch?.metadata.filter((order: any) => {
  //       if (order?.shopId?._id === userInfo?._id) {
  //         return order;
  //       }
  //     });
  //     setorders(ods);
  //   }
  // }, [dataFetch]);

  return (
    <>
      <section className="content-main">
        <div className="content-header">
          <h2
            onClick={() => {
              dispatch(
                openToast({
                  content: "You are not Admin",
                  toastType: "error",
                })
              );
            }}
            className="content-title"
          >
            {t("Dashboard")}
          </h2>
        </div>
        {/* Top Total */}
        <TopTotal orders={orders} userInfo={userInfo} />

        <div className="row">
          {/* STATICS */}
          <SaleStatistics />
          <ProductsStatistics />
        </div>

        {/* LATEST ORDER */}
        <div className="card mb-4 shadow-sm">
          <LatestOrder orders={orders} isLoading={1} error={false} />
        </div>
      </section>
    </>
  );
});

export default Main;

export const warehouseTodayData = {
  success: true,
  message: "Order Metrics Fetched",
  data: {
    warehouseMetrices: [
      {
        orderStatus: "PENDING",
        _count: { _all: 0 },
      },
      {
        orderStatus: "PURCHASE_ORDER",
        _count: { _all: 0 },
      },
      {
        orderStatus: "BILLED_FOR_STORE",
        _count: { _all: 0 },
      },
      {
        orderStatus: "OUT_FOR_STORE",
        _count: { _all: 0 },
      },
    ],
    orderMetrics: [
      {
        orderStatus: "OUT_FOR_DELIVERY",
        _count: { _all: 0 },
      },
      {
        orderStatus: "DELIVERED",
        _count: { _all: 0 },
      },
      {
        orderStatus: "REJECTED_BY_RETAILER",
        _count: { _all: 0 },
      },
    ],
    totalAmt: 0,
  },
};
